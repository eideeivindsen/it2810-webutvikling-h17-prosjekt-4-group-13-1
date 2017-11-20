import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcloudComponent } from './wordcloud.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { UserService } from '../../../_services/user.service';
import { ProfileService } from '../../../_services/profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

describe('WordcloudComponent', () => {
  let component: WordcloudComponent;
  let fixture: ComponentFixture<WordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, RouterModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, ProfileService, HttpClient, HttpHandler],
      declarations: [ WordcloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
