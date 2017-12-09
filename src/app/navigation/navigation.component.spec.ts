import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { UserService, ProfileService } from '../barrel';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

class MockProfileService extends ProfileService {
  mockData: any[] = [{
      name: 'Ola Normann',
      username: 'ola.normann@mail.com',
      password: '12345',
      createdAt: new Date(),
      role: 'Employee',
      search_history: [],
  }];

  getProfile() {
      return Observable.of(this.mockData);
   }

  getProfileHistory() {
    return Observable.of(this.mockData[0].search_history);
  }
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockProfileService: ProfileService;
  let getSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, HttpClient, HttpHandler, { provide: ProfileService, useClass: MockProfileService }],
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    mockProfileService = TestBed.get(ProfileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update profile', () => {
    let name = '';
    let role = '';
    getSpy = spyOn(mockProfileService, 'getProfile').and.callThrough();

    mockProfileService.getProfile().subscribe((result) => {
      name = result[0].name;
      role = result[0].role;
    });

    expect(name).toBe('Ola Normann');
    expect(role).toBe('Employee');
    expect(getSpy).toHaveBeenCalled();
  });
});
