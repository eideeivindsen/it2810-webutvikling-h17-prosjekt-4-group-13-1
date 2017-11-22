import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewComponent } from './profile-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { UserService, ProfileService, PlunkerMaterialModule } from '../barrel';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { User } from '../user';

class MockProfileService extends ProfileService {
    mockData: any[] = [{
        name: 'Ola Normann',
        username: 'ola.normann@mail.com',
        password: '12345',
        createdAt: new Date(),
        role: 'Employee',
        search_history: [
          {
            category: "Chocolate",
            description: "The most popular chocolate on the Norwegian market.",
            in_stock: false,
            kilo_price: 145,
            name: "Melkesjokolade",
            origin: "Norway",
            price: 29,
            producer: "Freia",
            quantity: 0,
            search_date: "2017-11-21T15:41:12.362Z",
            weight: 200,
            _id: "5a0303ffa7ff1f142cc02588"
          },
          {
            category: "Dairy",
            description: "Milk from norwegian cows",
            in_stock: true,
            kilo_price: 22.6,
            name: "Lettmelk",
            origin: "Norway",
            price: 24,
            producer: "Tine",
            quantity: 500,
            search_date: "2017-11-21T15:41:13.340Z",
            weight: 1060,
            _id: "5a01c9e18bacba30e02af3ad"
          }
        ],
    }];

  getProfile() {
      return Observable.of(this.mockData);
  }

  getProfileHistory() {
    return Observable.of(this.mockData[0].search_history);
  }
}

describe('ProfileViewComponent', () => {
  let component: ProfileViewComponent;
  let fixture: ComponentFixture<ProfileViewComponent>;
  let mock: MockProfileService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, PlunkerMaterialModule, ChartsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService, { provide: ProfileService, useClass: MockProfileService }, HttpClient, HttpHandler],
      declarations: [ ProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mock = TestBed.get(ProfileService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should check if dataSource is defined', () => {
    expect(component.dataSource).toBeDefined();
  });

  it('should format date object', () => {
    expect(component.formatDate(new Date("Tue Nov 21 2017 18:04:33 GMT+0100 (W. Europe Standard Time)"))).toEqual("2017-11-21");
  });

  it('should refine search history', () => {
    let data = mock.getProfileHistory();
    expect(component.refineProfileHistory(data)).toBeDefined();
  });

  it('should populate the piechart variables', () => {
    let data = mock.getProfileHistory();
    component.createPieChartData(data);
    expect(component.chartLabels).toEqual([ 'Melkesjokolade', 'Lettmelk' ]);
    expect(component.chartData).toEqual([ 1, 1 ]);
  });

});
