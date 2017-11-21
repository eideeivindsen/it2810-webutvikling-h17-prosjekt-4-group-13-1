import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WordcloudComponent } from './wordcloud.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { UserService, ProfileService, SearchService, PlunkerMaterialModule } from '../../../barrel';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgWordCloudModule } from 'angular4-word-cloud';

class MockSearchService extends SearchService {

  getAll() {
    let results = new Subject<any>();
    return results.asObservable();
  }
}

describe('WordcloudComponent', () => {
  let component: WordcloudComponent;
  let fixture: ComponentFixture<WordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, RouterModule, AgWordCloudModule, PlunkerMaterialModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, ProfileService, { provide: SearchService, useClass: MockSearchService }, HttpClient, HttpHandler, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} }],
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
