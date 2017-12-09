import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewComponent } from './search-view.component';
import { UserService } from '../_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ProfileService } from '../_services/profile.service';

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
  let fixture: ComponentFixture<SearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, HttpClient, HttpHandler, ProfileService],
      declarations: [ SearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
