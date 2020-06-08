import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendManagerRoutingModule } from './frontend-manager-routing.module';
import { FrontendManagerComponent } from './frontend-manager.component';

@NgModule({
  declarations: [FrontendManagerComponent],
  imports: [
    CommonModule,
    FrontendManagerRoutingModule
  ]
})
export class FrontendManagerModule { }
