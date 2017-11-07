import { Component, OnInit } from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';

import { WordcloudComponent } from './wordcloud/wordcloud.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  pageEvent: PageEvent;
  listLength: Number = 2;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(WordcloudComponent, {
        width: '75%',
        height: '75%',
        data: { name: 'Joachim' }
      });
    }

}
