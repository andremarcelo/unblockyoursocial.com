import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'unblockyoursocial.com | Automated Instagram Accounts Recovery';
  public options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    if(this.authenticationService!== null) {
      this.router.navigate(['/client/dashboard']);
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}

