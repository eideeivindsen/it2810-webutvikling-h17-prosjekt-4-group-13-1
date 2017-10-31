import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';

// Services
import { UserService } from './_services/user.service';
import { LoggedInGuard } from './_services/logged-in.guard';

import { routes } from './app.routes';



// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    ProfileViewComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [UserService, LoggedInGuard, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
