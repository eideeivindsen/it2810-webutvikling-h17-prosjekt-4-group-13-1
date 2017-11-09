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
      console.log('Component result: ' + result);
      if (result == 200) {
        console.log('Component: Valid statuscode 200...');
        this.router.navigate(['']);
      }
      /* TODO: Handle other status codes like:
      403 for incorrect credentials
      401 for invalid token
      *ADD MORE*
      */
    });
}

}
