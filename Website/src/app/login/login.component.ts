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
errorMessage: String = "";

constructor(private userService: UserService, private router: Router) {}

ngOnInit() {

     }

onSubmit() {
  this.userService.login(this.username, this.password).subscribe((result) => {
    if (result == 200) {
      console.log('Component: Valid statuscode 200...');
      this.errorMessage = "";
      this.router.navigate(['']);
    }
    /* TODO: Handle other status codes like:
    403 for incorrect credentials
    401 for invalid token
    *ADD MORE*
    */
    else if ((result >= 400) && (result <= 410)) {
      this.errorMessage = "Wrong username or password."
    }
  });
}

}
