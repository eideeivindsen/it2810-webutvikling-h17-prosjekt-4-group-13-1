import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { UserService } from '../../_services/user.service';
import { ProfileService } from '../../_services/profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material';
import { Overlay, ScrollStrategyOptions, OverlayContainer, OVERLAY_PROVIDERS} from '@angular/cdk/overlay';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { Platform } from '@angular/cdk/platform';
import { SearchService } from '../../_services/search.service';
import { Subject } from 'rxjs/Subject';

class MockSearchService extends SearchService {

  getAll() {
    let results = new Subject<any>();
    return results.asObservable();
  }
}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, // Måtte importere mange ting her, siden det brukes mye forskjellig i den faktiske visningen av lista
        ProfileService,
        SearchService,
        HttpClient,
        HttpHandler,
        MatDialog,
        Overlay,
        ScrollStrategyOptions,
        ScrollDispatcher,
        Platform,
        ViewportRuler,
        OVERLAY_PROVIDERS,
        OverlayContainer],
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    searchService = TestBed.get(SearchService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service dependency: searchService', () => {
      let getSpy = spyOn(searchService, 'getAll').and.callThrough();
      searchService.getAll();
      expect(getSpy).toHaveBeenCalled();
  });
});
