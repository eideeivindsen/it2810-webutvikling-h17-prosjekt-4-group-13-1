
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
    if (!localStorage.getItem("createdAt")){
      this.profileService.getProfile().subscribe((result) => {
        this.name = result[0].name;
        this.role = result[0].role;
        let createdAtDay = new Date(result[0].createdAt).getDay().toString();
        if (createdAtDay.length <= 1){
          createdAtDay = '0' + createdAtDay;
        }
        let createdAtMonth = new Date(result[0].createdAt).getMonth();
        let createdAtYear = new Date(result[0].createdAt).getFullYear();
        this.createdAt = createdAtYear + '-' +  createdAtMonth + '-' + createdAtDay ; // Jank med strings og nummer. uaaaah

        localStorage.setItem("name", result[0].name);
        localStorage.setItem("role", result[0].role);
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
  dataSource = new ExampleDataSource();


  // Doughnut TODO: faktisk data her
  public chartLabels:string[] = ['Tine melk 0,75L', 'Kesam Tine', 'Margarin Meieri', 'Coop Appelsinjuice', 'Tuborg 0,5L'];
  public chartData:number[] = [350, 450, 100, 35, 31];
  public chartType:string = 'pie';
  public chartOptions:any = {
    'responsive' : true,
    'animation.animateScale' : true
  }

  constructor(private profileService: ProfileService, private router: Router) {}
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

  getProfileHistory() {
    this.profileService.getProfileHistory().subscribe((result) => {
        //TODO: Result is now an array of products (objects). Do what you must, sir!
    });
  }

}



// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface Element {
  date: Date;
  search: string;
}

// const data: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

const data: Element[] = [
  {date: new Date("2017-11-1"), search: 'Tine melk 0,75L'},
  {date: new Date("2017-10-25"), search: 'Kesam Tine'},
  {date: new Date("2016-10-20"), search: 'Margarin Meieri'},
  {date: new Date("2016-09-16"), search: 'Coop Appelsinjuice'},
  {date: new Date("2015-09-15"), search: 'Tuborg 0,5L'}
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
