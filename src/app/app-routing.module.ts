import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: './pages/pages.module#PagesModule' },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'password-forget', component: PasswordForgetComponent  },
  { path: 'client', component: AdminComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
