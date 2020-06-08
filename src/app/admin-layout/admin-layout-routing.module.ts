import { AdminLayoutComponent } from './admin-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
       { path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
            { path: 'selfies', loadChildren: () => import('./selfies/selfies.module').then(m => m.SelfiesModule) },
            { path: 'emails', loadChildren: () => import('./emails/emails.module').then(m => m.EmailsModule) },
            { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
            { path: 'chat', loadChildren: () => import('./chat-bot/chat-bot.module').then(m => m.ChatBotModule) },
            { path: 'packages', loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule) },
            { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
            { path: 'manager', loadChildren: () => import('./frontend-manager/frontend-manager.module').then(m => m.FrontendManagerModule) }
       ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
