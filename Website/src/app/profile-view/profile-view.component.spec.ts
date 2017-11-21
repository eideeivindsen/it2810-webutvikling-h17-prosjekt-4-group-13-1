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
        search_history: [],
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, PlunkerMaterialModule, ChartsModule], // Noe med matHeaderRowDef som hindrer testene å kjøre. StackOverflow nevner noe med ngFor-syntaks som fucker med det.
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
