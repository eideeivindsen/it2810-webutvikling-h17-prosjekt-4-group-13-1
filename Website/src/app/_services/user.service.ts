import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  // register new user
  register(name, username, password, role, createdAt) {
    return this.http
      .post(
        '/api/register',
        { name, username, password, role, createdAt}
      )
      .map((res:any) => {
        if (res.success) {
          //this.login(username, password)
        }
        return res.success;
      });
  }

  // Login user
  login(email, password) {

    return this.http
      .post(
        '/api/authenticate',
        { email, password }
      )
      .map((res: any) => {
        if (res.status == 200) {
          console.log('Service: Valid statuscode 200...');
          console.log('Response data: ' + res.data);
          console.log('Auth token stringify: ' + JSON.stringify(res.data[0]));
          
          
          localStorage.setItem('auth_token', res.data[0]);
          this.loggedIn = true;
        }
        return res.status;
      });

  }

  // Logout user
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('createdAt');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
