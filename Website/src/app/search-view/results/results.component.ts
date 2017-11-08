import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Object[] = [];
  displayedResults: Object[];
  subscription: Subscription;

  constructor(public dialog: MatDialog, private searchService: SearchService) {
      this.subscription = this.searchService.getResults().subscribe(results => {
          this.results = results;
          this.displayedResults = results.slice(0,5)
      });
  }

  ngOnInit() {
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(WordcloudComponent, {
        width: '75%',
        height: '75%',
        data: { results: this.results }
      });
    }

    onPaginateChange(event) {
        var start = event.pageIndex * event.pageSize;
        this.displayedResults = this.results.slice(start, start + event.pageSize);
    }

}
