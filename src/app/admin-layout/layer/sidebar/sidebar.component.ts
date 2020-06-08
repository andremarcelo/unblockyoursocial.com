import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from './../../../_services';
import { User } from './../../../_models';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    DisplayMenu: string;
    SidebarClass: string;
    currentUser: User;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.DisplayMenu = '';
        this.SidebarClass = 'sidebar-right';
    }

    expandMenu(element: any) {
        if (element === this.DisplayMenu) {
            this.DisplayMenu = '0';
        } else {
            this.DisplayMenu = element;
        }
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.SidebarClass);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
