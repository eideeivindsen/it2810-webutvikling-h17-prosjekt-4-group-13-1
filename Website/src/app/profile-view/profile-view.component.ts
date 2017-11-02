import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service'
import { User } from '../user';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  constructor(private profileService: ProfileService ) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe((result) => {
      //TODO: Handle profile info. result is an object with success, name, role and admin. 
    });
  }
  
}
