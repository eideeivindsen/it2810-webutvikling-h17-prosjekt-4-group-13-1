import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AgWordCloudModule } from 'angular4-word-cloud';

// Components
import {
    AppComponent,
    SearchViewComponent,
    ProfileViewComponent,
    NavigationComponent,
    LoginComponent,
    SearchComponent,
    ResultsComponent,
    AddnewComponent,
    ResultComponent,
    WordcloudComponent,
    RegisterComponent } from './barrel';

// Services
import { UserService, LoggedInGuard, ProfileService, SearchService, ResultsService } from './barrel';

// Routes
import { routes } from './app.routes';

// Material Design
import { PlunkerMaterialModule } from './barrel';


@NgModule({
  declarations: [
    AppComponent,
    SearchViewComponent,
    ProfileViewComponent,
    NavigationComponent,
    LoginComponent,
    SearchComponent,
    ResultsComponent,
    AddnewComponent,
    ResultComponent,
    WordcloudComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgWordCloudModule.forRoot(),
    PlunkerMaterialModule,
  ],

  entryComponents: [WordcloudComponent],

  providers: [UserService, LoggedInGuard, ProfileService, SearchService, ResultsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
