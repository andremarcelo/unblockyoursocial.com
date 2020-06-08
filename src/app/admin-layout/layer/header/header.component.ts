import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../_services';
import { User } from './../../../_models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  SidebarClass: string;

  currentUser: User;
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x.data);
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.SidebarClass = 'sidebar-right';
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.SidebarClass);
}
}
