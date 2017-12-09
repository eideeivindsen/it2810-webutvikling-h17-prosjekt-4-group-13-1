import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoggedInGuard, UserService } from '../barrel';

class MockUserService extends UserService {
    value = true;

    isLoggedIn() {
        return this.value;
    }
}

describe('LoggedInGuard', () => {
  let service: LoggedInGuard;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, LoggedInGuard, { provide: UserService, useClass: MockUserService }]
    });

    service = TestBed.get(LoggedInGuard);
    userService = TestBed.get(UserService);
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should call service dependency: userService', () => {
        spyOn(userService, 'isLoggedIn');
        service.canActivate();
        expect(userService.isLoggedIn).toHaveBeenCalled();
    });

    it('should return value stored in userService', () => {
          expect(service.canActivate()).toBeTruthy();
      });

});
