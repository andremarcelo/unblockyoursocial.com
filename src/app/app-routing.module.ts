import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgetComponent } from './password-forget/password-forget.component';
import { AuthGuard } from './_helpers';
import {LogoutComponent} from "./logout/logout.component";
const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: './pages/pages.module#PagesModule' },
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'password-forget', component: PasswordForgetComponent  },
  { path: '', pathMatch: 'full', redirectTo: '' }, // see redirect not found page

  { path: 'client', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule), canActivate: [AuthGuard]  },
  //{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '' }// otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
