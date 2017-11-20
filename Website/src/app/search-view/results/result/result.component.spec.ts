import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchService } from '../../../_services/search.service';
import { ResultsService } from '../../../_services/results.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from '../../../_services/user.service';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ResultsService, SearchService, HttpClient, HttpHandler, /* UserService */], // Something is wrong here. Crashes when UserService is imported
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
