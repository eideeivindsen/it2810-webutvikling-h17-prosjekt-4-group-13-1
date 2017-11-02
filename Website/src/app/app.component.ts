import { Component } from '@angular/core';

// Import the DataService
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project 4 Application';
  users: Array<any>;
  //TODO: Remove databaseService if not used. Keep for reference for now
  constructor(private _databaseService: DatabaseService){
      this._databaseService.getUsers()
      .subscribe(res => this.users = res);
  }
}
