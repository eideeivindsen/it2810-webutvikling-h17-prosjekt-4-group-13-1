import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../product';
import { ResultsService } from '../../../_services/results.service';

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

  constructor(private resultsService: ResultsService) {
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
      // Write code here to send this.data to a service
      // together with username to update user history.
  }

}
