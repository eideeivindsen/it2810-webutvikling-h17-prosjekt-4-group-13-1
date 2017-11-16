import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { SearchService } from '../../_services/search.service';

import { Product } from '../../product';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Object[] = [];
  subscription: Subscription;
  isLoading: Subscription;
  pageEvent: PageEvent = new PageEvent;
  searched: boolean = false;
  sortBy: String = '';
  sortAsc: Boolean = true;

  constructor(public dialog: MatDialog, private searchService: SearchService) {
      this.pageEvent = {pageIndex: 0, pageSize: 5, length: 10}
      this.subscription = this.searchService.getResults().subscribe(results => {
          this.results = results;
          this.searched = true;
      });
      this.subscription = this.searchService.getIsLoading().subscribe(results => {
          this.isLoading = results;
      });
  }

  ngOnInit() {
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(WordcloudComponent, {
        width: '75%',
        height: '75%',
        data: { results: this.searchService.getAll().subscribe((result) => result)}
      });
    }

    onPaginateChange(event: PageEvent) {
        this.pageEvent = event;
        const sort = {
            "sortBy": this.sortBy,
            "order": this.sortAsc ? 1 : -1,
        }
        this.searchService.update(event.pageIndex, this.sortBy.length > 0 ? sort : 0).subscribe();
    }

    sort(sortParam) {
        if(this.results.length != 0) {
            this.sortBy === sortParam ? this.sortAsc = !this.sortAsc : this.sortAsc = true;
            this.sortBy = sortParam;
            const sort = {
                "sortBy": sortParam,
                "order": this.sortAsc ? 1 : -1,
            }
            this.searchService.update(this.pageEvent.pageIndex, sort).subscribe();
        }
    }

}
