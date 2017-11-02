import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    return this.http
      .post(
        '/api/authenticate',
        { email, password }
      )
      .map((res: any) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
    
        return res.success;
      });

  }

  logout() {
   
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
