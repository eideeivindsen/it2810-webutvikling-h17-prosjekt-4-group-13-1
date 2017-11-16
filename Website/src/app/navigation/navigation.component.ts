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
      // Checks for navigationEnd (when the page is finished loading).
      this.router.events.subscribe((event:Event) => {
        if (event instanceof NavigationEnd && this.router.url == '/' && this.userService.isLoggedIn()){
          this.updateProfileCard();
        }
      })
    }
    
    updateProfileCard(){
      // Fetches name and role from profile and stores in Localstorage
      this.profileService.getProfile().subscribe((result) => {
        this.name = result[0].name;
        this.role = result[0].role;
        localStorage.setItem("name", result[0].name);
        localStorage.setItem("role", result[0].role);
      });
    }

    logout() {
      // Logs the user out
      this.userService.logout();
      this.router.navigate(['/login']);
    }

}
