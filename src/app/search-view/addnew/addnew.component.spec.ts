import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewComponent } from './addnew.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { ProfileService } from '../../_services/profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchService } from '../../_services/search.service';

class MockUserService extends UserService {
  value = true;

  isLoggedIn() {
      return this.value;
  }
}

describe('AddnewComponent', () => {
  let component: AddnewComponent;
  let fixture: ComponentFixture<AddnewComponent>;
  let mockUserService: UserService; 
  let getSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: UserService, useClass: MockUserService }, HttpClient, HttpHandler, ProfileService, SearchService],
      declarations: [ AddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewComponent);
    component = fixture.componentInstance;
    mockUserService = TestBed.get(UserService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service dependency: userService', () => {
    getSpy = spyOn(mockUserService, 'isLoggedIn').and.callThrough();
    mockUserService.isLoggedIn();
    expect(getSpy).toHaveBeenCalled();
});
});
