import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './index1/index1.component';

const routes: Routes = [
  { path: '', component: Index1Component },
  /*{ path: 'index1', component: Index1Component },
 { path: 'index2', component: Index2Component },
 { path: 'index3', component: Index3Component },
 { path: 'index4', component: Index4Component },
 { path: 'index5', component: Index5Component },
 { path: 'index6', component: Index6Component },
 { path: 'index7', component: Index7Component },
 { path: 'index8', component: Index8Component },
 { path: 'index9', component: Index9Component },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
