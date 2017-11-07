import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  addProduct(product) {
      const auth_token = localStorage.getItem('auth_token');
      const body = product;
      this.http
      .post('/api/products/add', body, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${auth_token}`),
        })
      .subscribe();
  }
}
