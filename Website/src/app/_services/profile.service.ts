import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    const auth_token = localStorage.getItem('auth_token');
    return this.http
    .get('/api/profile', {
          headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`)
      })
  }

  getRecentSearches() {
    return this.http
      .get(
        '/recent-searches'
      )
      .map((res: any) => {
        if (res.success) {
          return res.success;
        }
      });

  }
}
