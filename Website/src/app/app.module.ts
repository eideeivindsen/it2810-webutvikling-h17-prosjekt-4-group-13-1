import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatExpansionModule,
         MatIconModule,
         MatInputModule,
         MatPaginatorModule,
         MatSelectModule,
         MatSliderModule,
         MatTableModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';

// Components
import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';

// Services
import { DatabaseService } from './database.service';
import { UserService } from './_services/user.service';
import { ProfileService } from './_services/profile.service';
import { LoggedInGuard } from './_services/logged-in.guard';
import { ProfileService } from './_services/profile.service';

import { routes } from './app.routes';
import { SearchComponent } from './search-view/search/search.component';
import { ResultsComponent } from './search-view/results/results.component';




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
    ChartsModule,
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
    MatTableModule
  ],

  providers: [UserService, LoggedInGuard, DatabaseService, ProfileService],

  bootstrap: [AppComponent]
})
export class AppModule { }
