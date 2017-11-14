import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

@Injectable()
export class SearchService {
  private results = new Subject<any>();

  constructor(private http: HttpClient) {  }

  addProduct(product) {
      const auth_token = localStorage.getItem('auth_token');
      const body = product;
      this.http
      .post('/api/products/add', body, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
        })
      .subscribe();
  }

  getResults(): Observable<any> {
        return this.results.asObservable();
    }

}
