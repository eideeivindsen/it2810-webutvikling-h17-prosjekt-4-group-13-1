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

describe('AddnewComponent', () => {
  let component: AddnewComponent;
  let fixture: ComponentFixture<AddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, HttpClient, HttpHandler, ProfileService, SearchService],
      declarations: [ AddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
