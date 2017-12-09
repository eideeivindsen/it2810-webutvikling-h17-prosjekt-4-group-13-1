import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SearchService } from '../barrel';
import { Product } from '../product';

/*
  Metodene ADDPRODUCT, ADDTOHISTORY, GET, GETALL OG UPDATE testes alle gjennom E2E-TESTENE
  og testes derfor IKKE i unit testene.
*/

describe('SearchService', () => {
  let service: SearchService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, SearchService]
    });

    service = TestBed.get(SearchService);
  });

  beforeEach(() => {
      var store = {};

      spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
       return store[key] || null;
      });
      spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
        delete store[key];
      });
      spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
        return store[key] = <string>value;
      });
      spyOn(localStorage, 'clear').and.callFake(() =>  {
          store = {};
      });
    });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should get an observable by envoking getResults',
    async(inject([SearchService], (service: SearchService) => {
    service.getResults().subscribe(
      value => expect(value).toBeTruthy()
    );
  })));


  it('should get an observable by envoking getIsLoading',
    async(inject([SearchService], (service: SearchService) => {
    service.getIsLoading().subscribe(
      value => expect(value).toBeTruthy()
    );
  })));

});
