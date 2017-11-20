
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';


import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})

export class ProfileViewComponent {
  name:string = "";
  role:string = "";
  createdAt:string;

  ngOnInit(){
    // On pageload, checks if createdAt is in LocalStorage (usually not on a fresh login) and fetches it from the database if not.
    // Fetches name, role and createdAt from LocalStorage if not.
    if (!localStorage.getItem("createdAt")){
      this.profileService.getProfile().subscribe((result) => {
        this.createdAt = this.formatDate(new Date(result[0].createdAt));
        this.name = localStorage.getItem("name");
        this.role = localStorage.getItem("role");
        localStorage.setItem("createdAt", this.createdAt);
      });
    } else {
      this.name = localStorage.getItem("name");
      this.role = localStorage.getItem("role");
      this.createdAt = localStorage.getItem("createdAt");
    }
    this.getProfileHistory();
  }

  // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['search', 'date'];
  dataSource:ExampleDataSource;


  // Doughnut TODO: faktisk data her
  public chartLabels:string[] = [];
  public chartData:number[] = [];
  public chartType:string = 'pie';
  public chartOptions:any = {
    'responsive' : true,
    'animation.animateScale' : true
  }

  constructor(private profileService: ProfileService, private router: Router) {
    this.getProfileHistory().subscribe(
      (userHistory) => {
        console.log(userHistory);
        this.createPieChartData(userHistory);
        this.dataSource = new ExampleDataSource(this.refineProfileHistory(userHistory));
      }
    );
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  formatDate(d) {
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  refineProfileHistory(searchHistory) {
    console.log(searchHistory);
    var refined: Element[] = [];
    var usedSearches: string[] = [];
    for(var i = searchHistory.length - 1; i > 0; i--) {
      console.log("Search: " + searchHistory[i].name);
      if(usedSearches.length == 4) {
        console.log("userSearchs is 4");
        break;
      }
      else {
        if (usedSearches.indexOf(searchHistory[i].name) < 0) {
          console.log("search not used");
          usedSearches.push(searchHistory[i].name);
          refined.push({date: new Date(searchHistory[i].search_date), search: searchHistory[i].name});
        }
      }
      console.log(usedSearches);
      console.log("-----------");
    }
    console.log(refined);
    return refined;
  }

  getProfileHistory() {
    return this.profileService.getProfileHistory();
  }

  createPieChartData(dic) {
    var keyCount = {};
    for(let searchword of dic) {
      if(!(searchword.name in keyCount)) {
        keyCount[searchword.name] = 1;
      } else {
        keyCount[searchword.name] += 1;
      }
    }

    for(let search in keyCount) {
      console.log(search + " : " + keyCount[search]);
      this.chartLabels.push(search);
      this.chartData.push(keyCount[search]);
    }
  }

}

export interface Element {
  date: Date;
  search: string;
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  // Connect function called by the table to retrieve one stream containing the data to render.
  constructor(private profileHistory: Element[]) {
    super();
  }
  connect(): Observable<Element[]> {
    return Observable.of(this.profileHistory);
  }

  disconnect() {}
}
