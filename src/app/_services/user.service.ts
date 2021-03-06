import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  // Register new user
  register(user) {
    return this.http
      .post(
        '/api/register',
         user
      )
      .map((res:any) => {
        if (res.status == 200) {
          res.credentials = {
            username: user.username,
            password: user.password
          }
          return res;
        }
        else {
          return res;
        }
      });
  }

  // Login user
  login(username, password) {
    return this.http
      .post(
        '/api/authenticate',
        { username, password }
      )
      .map((res: any) => {
        if (res.status == 200) {
          localStorage.setItem('auth_token', res.data[0]);
          this.loggedIn = true;
        }
        return res.status;
      });

  }

  // Logout user and clears LocalStorage
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('createdAt');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
