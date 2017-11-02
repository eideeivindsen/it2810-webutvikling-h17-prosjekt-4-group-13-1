import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatExpansionModule,
         MatIconModule,
         MatInputModule,
         MatPaginatorModule,
         MatSelectModule,
         MatSliderModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';

// Services
import { UserService } from './_services/user.service';
import { LoggedInGuard } from './_services/logged-in.guard';
import { ProfileService } from './_services/profile.service';

import { routes } from './app.routes';
import { SearchComponent } from './search-view/search/search.component';
import { ResultsComponent } from './search-view/results/results.component';



// Import the Http Module and our Data Service
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    ProfileViewComponent,
    NavigationComponent,
    LoginComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSliderModule,
  ],
  providers: [UserService, LoggedInGuard, DatabaseService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
