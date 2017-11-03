import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username: String = "";
password: String = "";

constructor(private userService: UserService, private router: Router) {}

ngOnInit() {

     }

  onSubmit() {
    this.userService.login(this.username, this.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
}

}
