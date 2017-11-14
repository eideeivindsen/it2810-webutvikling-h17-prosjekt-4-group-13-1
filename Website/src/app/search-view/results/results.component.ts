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
  pageEvent: PageEvent = new PageEvent;
  searched: boolean = false;

  constructor(public dialog: MatDialog, private searchService: SearchService) {
      this.subscription = this.searchService.getResults().subscribe(results => {
          this.results = results;
          this.pageEvent = {pageIndex: 0, pageSize: 5, length: results.length}
          this.searched = true;
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
        this.searchService.update(event.pageIndex, 0).subscribe();
    }

    sort(sortBy: String) {
        switch(sortBy) {
            case 'name':
                this.results.sort(function(a: Product, b: Product) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
                this.onPaginateChange(this.pageEvent);
                break;
            case 'producer':
                this.results.sort(function(a: Product, b: Product) {return (a.producer > b.producer) ? 1 : ((b.producer > a.producer) ? -1 : 0);} );
                this.onPaginateChange(this.pageEvent);
                break;
            case 'stockstatus':
                this.results.sort(function(a: Product, b: Product) {return (a.in_stock === b.in_stock)? 0 : a.in_stock? -1 : 1;} );
                this.onPaginateChange(this.pageEvent);
                break;
        }
    }

}
