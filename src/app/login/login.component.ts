import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "../User";
import {CONST} from "../CONST";
import { ApiService } from '../api.service';
import { AlertService } from '../_alert';
import { Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formdata;
    user:  User;
    validatorClass: CONST;
    apiService : ApiService;
    alertService : AlertService;
    public options = {
        autoClose: true,
        keepAfterRouteChange: false
    };
    constructor(private apiService: ApiService, public alertService: AlertService, private router: Router) {
        this.user = new User();
        this.validatorClass = new CONST();
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
            this.apiService.login(this.user).subscribe((user:User) => {
                this.user = user;
                if (this.user.status  === 'error') {
                    this.alertService.error('Login error\n', this.options);
                } else {
                    this.router.navigate(['client']);
                }
            });
        }
    }
}
