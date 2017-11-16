import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../product';
import { ResultsService } from '../../../_services/results.service';
import { SearchService } from '../../../_services/search.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() data: Product;
  @Input() index: Number;
  pictureUrl: string;
  subscription: Subscription;
  step: Number;

  constructor(private resultsService: ResultsService, private searchService: SearchService, private userService: UserService) {
      this.subscription = this.resultsService.getStep().subscribe(result => {
          this.step = result;
      });
    }

  ngOnInit() {
      this.pictureUrl = '../../../assets/img/categories/' + this.data.category.toLowerCase() +'.png';
  }

  setStep(index: Number) {
      this.resultsService.setStep(index);
  }

  addToViewed() {
      if(this.userService.isLoggedIn()){
          this.searchService.addToHistory(this.data)
      }
  }

}
