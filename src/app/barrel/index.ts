import { NgModule } from '@angular/core';

// Material Design
import { CdkTableModule } from '@angular/cdk/table';
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

  // Components
  export { AppComponent } from '../app.component';
  export { SearchViewComponent } from '../search-view/search-view.component';
  export { ProfileViewComponent } from '../profile-view/profile-view.component';
  export { NavigationComponent } from '../navigation/navigation.component';
  export { LoginComponent } from '../login/login.component';
  export { SearchComponent } from '../search-view/search/search.component';
  export { ResultsComponent } from '../search-view/results/results.component';
  export { AddnewComponent } from '../search-view/addnew/addnew.component';
  export { ResultComponent } from '../search-view/results/result/result.component';
  export { WordcloudComponent } from '../search-view/results/wordcloud/wordcloud.component';
  export { RegisterComponent } from '../register/register.component';

  // Services
  export { UserService } from '../_services/user.service';
  export { LoggedInGuard } from '../_services/logged-in.guard';
  export { ProfileService } from '../_services/profile.service';
  export { SearchService } from '../_services/search.service';
  export { ResultsService } from '../_services/results.service';


// Material Design Plunker
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
