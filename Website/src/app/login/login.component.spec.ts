import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService, ProfileService } from '../barrel';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let mockUserService: UserService;
  let fixture: ComponentFixture<LoginComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpModule, FormsModule, HttpClientTestingModule, HttpTestingController],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],      
      declarations: [ LoginComponent ],
      providers: [UserService, HttpClient, HttpHandler, ProfileService]
      
    })
    .compileComponents();

    mockUserService = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should log in', () => {
    mockUserService.login('Test@Testesen.com', '12345');
    expect(mockUserService.isLoggedIn).toBeTruthy();
  })
});

