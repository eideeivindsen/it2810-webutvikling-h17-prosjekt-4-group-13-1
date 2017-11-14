import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProfileService } from '../_services/profile.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { log } from 'util';


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
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd && this.router.url == '/'){
          this.updateProfileCard()
        }
      })
    }

    updateProfileCard(){
      if (this.userService.isLoggedIn()){
        if (!localStorage.getItem("username")){
          this.profileService.getProfile().subscribe((result) => {
            this.name = result[0].name;
            this.role = result[0].role;
            localStorage.setItem("username", result[0].name);
            localStorage.setItem("role", result[0].role);
          });
        } else {
          this.name = localStorage.getItem("username");
          this.role = localStorage.getItem("role");
        }
      }
    }

    logout() {
      this.userService.logout();
      this.router.navigate(['/login']);
    }

}
