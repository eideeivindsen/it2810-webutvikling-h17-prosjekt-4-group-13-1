import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullName: String = "";
  username: String = "";
  password: String = "";
  chosenRole: String = "Customer";
  roles: String[] = [
    "Admin",
    "CEO",
    "Employee",
    "Customer"
  ];
  createdAt: Date;
  secret: String = "turtleneck";
  typedSecret: String = "";
  // errors
  wrongPassword: Boolean = false;
  wrongSecret: Boolean = false;
  errorMessage: String = "";


  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {

  }

  // debugging \o/
  printAll() {
    this.createdAt = new Date;
    // if not customer, check secret
    if (this.chosenRole != "Customer") {
      console.log("Admin chosen");
      if (this.typedSecret === this.secret) {
        console.log("Secret is correct");
        console.log(this.fullName);
        console.log(this.username);
        console.log(this.password);
        console.log(this.chosenRole);
        console.log(this.createdAt);
        console.log(this.secret + " " + this.typedSecret);
        this.router.navigate(['/login']);
      } else {
        this.wrongSecret = true;
        console.log("Secret is wrong");
      }
    // otherwise create user
    } else {
      console.log("Customer chosen")
      console.log(this.fullName);
      console.log(this.username);
      console.log(this.password);
      console.log(this.chosenRole);
      console.log(this.createdAt);
      this.router.navigate(['/login']);
    }

  }

  validateRegisterFeedback(res) {
    console.log(res);
    if (res.status == 200) {
      this.userService.login(res.credentials.username, res.credentials.password).subscribe((result) => {
        if (result == 200) {
          console.log("Logged in!");
          this.router.navigate(['']);
        }
        else {
          console.log("Not logged in!");
          this.errorMessage = "Ops! Somthing went wrong. Please try again laster."
        }
      });
      this.router.navigate(['/']);
    }
    else if (res.status == 409){
      this.errorMessage = "Username is already in use."
    }
    else if (res.status == 501) {
      this.errorMessage = "Problems with the servers. Try again later."
    }
  }

  onSubmit() {
    this.createdAt = new Date;
    // if not customer, check secret
    if (this.chosenRole != "Customer") {
      if (this.typedSecret === this.secret) {
        this.userService.register(this.fullName, this.username, this.password, this.chosenRole, this.createdAt).subscribe((res) => {
          this.validateRegisterFeedback(res);
        });
      }
    // otherwise create user
    } else {
      this.userService.register(this.fullName, this.username, this.password, this.chosenRole, this.createdAt).subscribe((res) => {
        this.validateRegisterFeedback(res);
      });
    }

  }
}
