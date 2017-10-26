import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginFormComponent } from './/profile-view/login-form/login-form.component';

import { AuthenticationService } from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    ProfileViewComponent,
    NavigationComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchViewComponent
      },
      {
        path: 'profile',
        component: ProfileViewComponent
      }
    ]),
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
