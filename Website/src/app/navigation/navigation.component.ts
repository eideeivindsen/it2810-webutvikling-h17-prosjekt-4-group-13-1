import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProfileService } from '../_services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    name: String = "";
    role: String = "";

    constructor(private userService: UserService, private router: Router, private profileService: ProfileService) { }

    ngOnInit() {
    }

    logout() {
      this.userService.logout();
      this.router.navigate(['/login']);
    }

}
