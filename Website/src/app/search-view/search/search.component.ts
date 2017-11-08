import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../_services/search.service';
import { countries, producers, categories } from '../../../assets/variables';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showExpantion: Boolean = false;
  categories: String[] = ["Show all"].concat(categories);
  producers: String[] = ["Show all"].concat(producers);
  selectedCategory: String = categories[0];
  selectedProducer: String = producers[0];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  expandSearch() {
      this.showExpantion = !this.showExpantion;
  }

  search() {
    this.searchService.getAll().subscribe();
  }

}
