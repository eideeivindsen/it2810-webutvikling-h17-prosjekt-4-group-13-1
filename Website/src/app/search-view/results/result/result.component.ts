import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../product';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() data: Product;
  pictureUrl: string;

  constructor() {  }

  ngOnInit() {
      this.pictureUrl = '../../../assets/img/categories/' + this.data.category.toLowerCase() +'.png';
  }


}
