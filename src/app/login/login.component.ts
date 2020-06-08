import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "../_models/user";
import {CONST} from "../_models/CONST";
import { AlertService } from '../_alert';
import { Router} from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../_services';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formdata;
    user:  User;
    validatorClass: CONST;
    public options = {
        autoClose: true,
        keepAfterRouteChange: false
    };
    constructor(        private authenticationService: AuthenticationService, public alertService: AlertService, private router: Router) {
        this.user = new User();
        this.validatorClass = new CONST();
        console.log(this.authenticationService.currentUserValue, 'test');
        if (this.authenticationService!=null && this.authenticationService.currentUserValue !== null) {
            this.router.navigate(['/client']);
        }
    }

    ngOnInit() {

        document.body.classList.add('bg-account-pages');
        document.body.classList.add('py-4');
        document.body.classList.add('py-sm-0');

        this.formdata = new FormGroup({
            email: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ])),
            password: new FormControl("", this.passwordvalidation)

        });
    }

    passwordvalidation(formcontrol) {
        if (formcontrol.value.length < 5) {
            return {"password": true};
        }
    }


    onClickSubmit(data) {
        if (this.formdata.invalid) {
            this.formdata.get('email').markAsTouched({onlySelf:true});
            this.formdata.get('password').markAsTouched({onlySelf:true});
        } else {
            this.user.email =  this.formdata.get('email').value;
            this.user.password =  this.formdata.get('password').value;
            console.log(  this.user);
            this.authenticationService.login(this.user.email , this.user.password ).subscribe((user:User) => {
                this.user = user;
                if (this.user!==null && this.user.status  !== 'error') {
                    this.router.navigate(['/client']).then();
                } else {
                    this.alertService.error('Login error\n', this.options);
                }
            });

        }

    }
}
