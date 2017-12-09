import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AgWordCloudData} from 'angular4-word-cloud';
import { SearchService } from '../../../_services/search.service';

import { Product } from '../../../product'

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css']
})
export class WordcloudComponent implements OnInit {
    wordData: Array<AgWordCloudData> = [];

    constructor(
      private searchService: SearchService,
      public dialogRef: MatDialogRef<WordcloudComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.searchService.getAll().subscribe(result => {
          result.map(object => this.wordData.push({text: object.name, size: object.quantity}))
      })
  }

  onNoClick(): void {
      this.dialogRef.close();
    }


options = {
    settings: {
        minFontSize: 10,
        maxFontSize: 100,
    },
    margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    },
    labels: false
};

}
