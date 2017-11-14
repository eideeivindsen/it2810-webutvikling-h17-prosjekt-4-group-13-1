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
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  secretFormControl = new FormControl(this.typedSecret,[
    Validators.required,
    secretValidator
  ])

  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit() {
     
  }

  onSubmit() {
    this.createdAt = new Date;
    // if not customer, check secret
    if (this.chosenRole != "Customer") {
      if (this.typedSecret === this.secret) {
        this.userService.register(this.fullName, this.username, this.password, this.chosenRole, this.createdAt).subscribe((result) => {
          if (result) {
            this.router.navigate(['/login']);
          }
        });
      }
    // otherwise create user
    } else {
      this.userService.register(this.fullName, this.username, this.password, this.chosenRole, this.createdAt).subscribe((result) => {
        if (result) {
          this.router.navigate(['/login']);
        }
      });
    }
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

  
}