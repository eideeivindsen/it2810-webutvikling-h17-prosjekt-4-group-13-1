import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProfileService {
  private results = new Subject<any>();
  
  constructor(private http: HttpClient) {}

  getProfile() {
    const auth_token = localStorage.getItem('auth_token');
    return this.http
    .get('/api/profile', {
          headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`)
    })
    .map((res: any) => {
      if (res.status == 200) {
        console.log('res.data: ' + res.data);
        this.results.next(res.data);
        return res.data;
      }
    });
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

  getResults(): Observable<any> {
    return this.results.asObservable();
  }
}
