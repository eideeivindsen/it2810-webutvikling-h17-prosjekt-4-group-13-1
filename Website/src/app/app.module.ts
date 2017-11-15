import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { ChartsModule } from 'ng2-charts';
import { AgWordCloudModule } from 'angular4-word-cloud';

// Components
import { AppComponent } from './app.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search-view/search/search.component';
import { ResultsComponent } from './search-view/results/results.component';
import { AddnewComponent } from './search-view/addnew/addnew.component';
import { ResultComponent } from './search-view/results/result/result.component';
import { WordcloudComponent } from './search-view/results/wordcloud/wordcloud.component';
import { RegisterComponent } from './register/register.component';

// Services
import { UserService } from './_services/user.service';
import { LoggedInGuard } from './_services/logged-in.guard';
import { ProfileService } from './_services/profile.service';
import { SearchService } from './_services/search.service';
import { ResultsService } from './_services/results.service';

import { routes } from './app.routes';

import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
      } from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class PlunkerMaterialModule {}

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
