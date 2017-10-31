import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showExpantion: Boolean = false;
  selectedCategory: String = '';
  selectedProducer: String = '';
  categories: String[] = ['Show all', 'Ferskvarer', 'Kjølevarer', 'Godteri', 'Glutenfritt'];
  producers: String[] = ['Show all', 'Tine', 'Freia', 'Bakeren', 'Toro']

  constructor() { }

  ngOnInit() {
  }

  expandSearch() {
      this.showExpantion = !this.showExpantion;
  }

}
