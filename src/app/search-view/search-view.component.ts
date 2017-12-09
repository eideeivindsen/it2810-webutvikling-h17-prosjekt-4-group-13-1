import { Component, OnInit } from '@angular/core';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isEmployee() {
      return this.userService.isLoggedIn() && localStorage.role === 'Employee'
  }

}
