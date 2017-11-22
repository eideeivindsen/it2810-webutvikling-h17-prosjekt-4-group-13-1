import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProfileService, UserService } from '../barrel';

/*
  Begge metodene i servicen GetProfile og GetPorfileService testes i E2E-testene og testes derfor ikke her.
*/

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
