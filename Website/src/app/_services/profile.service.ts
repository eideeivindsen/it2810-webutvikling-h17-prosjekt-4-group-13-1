import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { log } from 'util';


@Injectable()
export class ProfileService {
  
  constructor(private http: HttpClient) {}

  getProfile() {
    const auth_token = localStorage.getItem('auth_token');
    return this.http
    .get('/api/profile', {
          headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`)
    })
    .map((res: any) => {
      if (res.status == 200) {
        return res.data;
      }
    });
  }

  getProfileHistory() {
    const auth_token = localStorage.getItem('auth_token');
    return this.http
      .get(
        '/api/profile/history',{
          headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`)
    })
      .map((res: any) => {
        if (res.status == 200) {
          return res.data;  // Returning array of all searches done by user
        }
      });

  }

  
}
