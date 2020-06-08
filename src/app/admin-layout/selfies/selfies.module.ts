import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfiesRoutingModule } from './selfies-routing.module';
import { SelfiesComponent } from './selfies.component';

@NgModule({
  declarations: [SelfiesComponent],
  imports: [
    CommonModule,
    SelfiesRoutingModule
  ]
})
export class SelfiesModule { }
