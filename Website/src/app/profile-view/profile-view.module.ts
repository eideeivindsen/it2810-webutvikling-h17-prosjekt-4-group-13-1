import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileViewComponent } from './profile-view.component';

@NgModule({
  declarations: [ ProfileViewComponent ],
  exports: [ ProfileViewComponent ],
  imports: [ CommonModule ]
})
export class CustomModule {}
