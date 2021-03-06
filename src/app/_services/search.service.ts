import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import { Product } from '../product';

@Injectable()
export class SearchService {
  private results = new Subject<any>();
  private isLoading = new Subject<any>();
  private filter: Object = {};

  constructor(private http: HttpClient) {  }

  addProduct(product: Product) {
      const auth_token = localStorage.getItem('auth_token');
      const body = product;
      this.http
      .post('/api/products/add', body, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
        })
      .subscribe();
  }

  addToHistory(product: Product){
    const auth_token = localStorage.getItem('auth_token');
    const body = product;
    body['search_date'] = new Date();  // Adds the date the search was conducted
    this.http
    .post('/api/user/update/history', body, {
          headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
      })
    .subscribe();
  }

  get(filter, index, sort) {
      this.isLoading.next(true);
      const auth_token = localStorage.getItem('auth_token');
      return this.http
      .get('/api/products/get', {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
            params: new HttpParams().set("filter", JSON.stringify(filter)).set("index", JSON.stringify(index)).set("sort", JSON.stringify(sort)),
      })
      .map((res: any) => {
        if (res.status) {
          this.filter = filter;
          this.isLoading.next(false);
          this.results.next(res.data);
        }
      })
  }

  getAll() {
      let params = new HttpParams().set("filter", JSON.stringify(this.filter));
      const auth_token = localStorage.getItem('auth_token');
      return this.http
      .get('/api/products/getAll', {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
            params: params,
      })
      .map((res: any) => {
        if (res.status) {
          return res.data;
        }
      })
  }

  update(index, sort) {
      this.isLoading.next(true);
      let params = new HttpParams().set("filter", JSON.stringify(this.filter)).set("index", JSON.stringify(index)).set("sort", JSON.stringify(sort));
      const auth_token = localStorage.getItem('auth_token');
      return this.http
      .get('/api/products/get', {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
            params: params,
      })
      .map((res: any) => {
        if (res.status) {
            this.isLoading.next(false);
          this.results.next(res.data);
        }
      })
  }

  getResults(): Observable<any> {
        return this.results.asObservable();
    }

  getIsLoading(): Observable<any> {
        return this.isLoading.asObservable();
    }

}
