import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from '../barrel';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, UserService,]
    });

    service = TestBed.get(UserService);
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

  it('should clear localStorage on call to logout', () => {
      localStorage.setItem('auth_token','123xxx');
      localStorage.setItem('createdAt', '2015-06-12');
      localStorage.setItem('name','Ola Normann');
      localStorage.setItem('role','Employee');
      service.logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token');
      expect(localStorage.removeItem).toHaveBeenCalledWith('createdAt');
      expect(localStorage.removeItem).toHaveBeenCalledWith('name');
      expect(localStorage.removeItem).toHaveBeenCalledWith('role');
  });

  it('should return false when service is instantiated', () => {
      var result = service.isLoggedIn();
      expect(result).toEqual(false);
  });

});
