import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  Validators,
  NgModel,
  NgForm,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { UserService } from '../_services/user.service';
import { log } from 'util';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileService } from '../_services/profile.service';
import { User } from '../user';


/* Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export function secretValidator(control: AbstractControl) {
  const secret = "turtleneck";
  let typedSecret = control.value;
  if (secret == typedSecret) {
    return null;
  } else {
    return control.value;
  }
}

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
  wrongSecret: Boolean = false;

  // Form validators
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  secretFormControl = new FormControl(this.typedSecret,[
    Validators.required,
    secretValidator
  ])

  errorMessage: String = "";

  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  validateRegisterFeedback(res) {
    if (res.status == 200) {
      this.userService.login(res.credentials.username, res.credentials.password).subscribe((result) => {
        if (result == 200) {
          console.log("Logged in!");
          this.router.navigate(['']);
        }
        else {
          console.log("Not logged in!");
          this.errorMessage = "Ops! Something went wrong. Please try again laster."
          this.router.navigate(['/login']);
        }
      });
    }
    else if (res.status == 409){
      this.errorMessage = res.message;
    }
    else if (res.status == 501) {
      this.errorMessage = "Problems with the servers. Try again later."
    }
  }

  onSubmit() {
    this.createdAt = new Date;
    let user: User = {
      name: this.fullName,
      username: this.username,
      password: this.password,
      createdAt: this.createdAt,
      role: this.chosenRole
    }
    console.log(this.matcher);
    // If not customer, check secret
    if (this.matcher) {
      if (this.chosenRole != "Customer") {
        if (this.typedSecret === this.secret) {
          this.userService.register(user).subscribe((res) => {
            this.validateRegisterFeedback(res);
          });
        }
        // Otherwise create user of type 'Customer'
      } else {
        this.userService.register(user).subscribe((res) => {
          this.validateRegisterFeedback(res);
        });
      }
    } else {
      console.log("Something went wrong!")
    }
  }
    
}

