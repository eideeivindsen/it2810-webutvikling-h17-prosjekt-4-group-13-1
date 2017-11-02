import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {

   }

   logout() {
      this.userService.logout();
   }

}
