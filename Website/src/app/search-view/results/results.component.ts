import { Component, OnInit } from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';

import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  pageEvent: PageEvent;
  results: Object;
  listLength: Number = 2;

  constructor(public dialog: MatDialog, private searchService: SearchService) { }

  ngOnInit() {
     this.searchService.getAll()
    .subscribe(data => {
        this.results = data
    })
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(WordcloudComponent, {
        width: '75%',
        height: '75%',
        data: { results: this.results }
      });
    }

}
