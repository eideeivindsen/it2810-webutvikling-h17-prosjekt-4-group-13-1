import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProfileService } from '../_services/profile.service';
import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { log } from 'util';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    name: String = "";
    role: String = "";
    subscription: Subscription;    

    constructor(private userService: UserService, private router: Router, private profileService: ProfileService) { 
      this.subscription = this.profileService.getResults().subscribe(results => {
        if (userService.isLoggedIn()){
          this.name = results[0].name;
          this.role = results[0].role;
          localStorage.setItem("username", results[0].name);
          localStorage.setItem("role", results[0].role);
        }
      });
      
    }

    ngOnInit() {
      //this.updateProfileCard();
    }
    
    // Gjør basically det samme som er i konstruktøren, bare mer lignende searchService
    // updateProfileCard(){
    //   if (!localStorage.getItem("username")){
    //     this.profileService.getProfile().subscribe((result) => {
    //       this.name = result[0].name;
    //       this.role = result[0].role;
    //       localStorage.setItem("username", result[0].name);
    //       localStorage.setItem("role", result[0].role);
    //     });
    //   } else {
    //     this.name = localStorage.getItem("username");
    //     this.role = localStorage.getItem("role");
    //   }
    // }

    logout() {
      this.userService.logout();
      this.router.navigate(['/login']);
    }

}
