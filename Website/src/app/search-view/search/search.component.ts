import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../_services/search.service';
import { countries, producers, categories } from '../../../assets/variables';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: String = '';
  showExpantion: Boolean = false;
  categories: String[] = ["Show all"].concat(categories);
  producers: String[] = ["Show all"].concat(producers);
  category: String;
  producer: String;
  price: Number;
  inStock: Boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
      this.category = this.categories[0];
      this.producer = this.producers[0];
      this.price = 1000;
      this.inStock = false;
  }

  expandSearch() {
      this.showExpantion = !this.showExpantion;
  }

  search() {
    $( "#input-field" ).blur();
    const filter: any = {
        "query": this.query,
        "advanced": this.showExpantion,
    }
    if(this.showExpantion) {
        filter.category = this.category;
        filter.producer = this.producer;
        filter.price = this.price;
        filter.inStock = this.inStock;
    }
    this.searchService.get(filter, 0, 0).subscribe();
    // this.searchService.get(filter, 0, 0).subscribe( () => window.scrollTo(0,document.body.scrollHeight));
  }

}
