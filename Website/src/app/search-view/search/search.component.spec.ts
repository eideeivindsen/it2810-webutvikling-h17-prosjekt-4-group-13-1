import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { UserService } from '../../_services/user.service';
import { ProfileService } from '../../_services/profile.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../_services/search.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, ProfileService, HttpClient, HttpHandler, SearchService],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate with the right values', () => {
    expect(component.category).toBeDefined();
    expect(component.producer).toBeDefined();
    expect(component.price).toEqual(1000);
    expect(component.inStock).toBeFalsy();
  });

  it('should call expandSearch()', () => {
    let expandSearchSpy = spyOn(component, 'expandSearch').and.callThrough();
    component.expandSearch();
    expect(expandSearchSpy).toHaveBeenCalled();
  });
});
