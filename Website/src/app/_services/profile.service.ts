import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    const headers = new HttpHeaders();
    const auth_token = localStorage.getItem('auth_token');
    return this.http
      .post('/api/profile', {auth_token});
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
