import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { UserService } from '../_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ProfileService } from '../_services/profile.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, HttpClient, HttpHandler, ProfileService],
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
