import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProfileService, UserService } from '../barrel';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, ProfileService,]
    });

    service = TestBed.get(ProfileService);
  });

  it('should create an instance', () => {
    expect(service).toBeDefined();
  });


});
