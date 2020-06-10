import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from "../_models/user";
import {CONST} from "../_models/CONST";
import {AlertService} from '../_alert';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from "../_services";
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
            password: new FormControl("", this.passwordvalidation),
            firstname: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern("[a-zA-Z ]*")
            ])),
            lastname: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern("[a-zA-Z ]*")
            ])),
            customControlInline: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern('true')
            ])),
            rpassword: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(16),
            ]),

        }, this.pwdMatchValidator);
    }

    passwordvalidation(formcontrol) {

        if (formcontrol.value.length < 5) {
            return {"password": true};
        }
    }
    pwdMatchValidator(frm: FormGroup) {
        return frm.get('password').value === frm.get('rpassword').value
            ? null : {'mismatch': true};
    }

    get password() { return this.formdata.get('password'); }
    get confirm_password() { return this.formdata.get('rpassword'); }

    onClickSubmit(data) {
        console.log(this.formdata);
        if (this.formdata.invalid) {
            this.formdata.get('firstname').markAsTouched({onlySelf:true});
            this.formdata.get('lastname').markAsTouched({onlySelf:true});
            this.formdata.get('email').markAsTouched({onlySelf:true});
            this.formdata.get('password').markAsTouched({onlySelf:true});
            this.formdata.get('rpassword').markAsTouched({onlySelf:true});
            this.formdata.get('customControlInline').markAsTouched({onlySelf:true});
        } else {
            this.user.firstName =  this.formdata.get('firstname').value;
            this.user.lastName =  this.formdata.get('lastname').value;
            this.user.email =  this.formdata.get('email').value;
            this.user.password =  this.formdata.get('password').value;
            this.user.rpassword =  this.formdata.get('rpassword').value;

            console.log(  this.user);
            this.authenticationService.register(   this.user.firstName,   this.user.lastName,  this.user.email, this.user.password, this.user.rpassword).subscribe((user:User) => {
                this.user = user;
                if (this.user!==null && this.user.status  == 'email-exists') {
                    this.alertService.error('The email  is register\n', this.options);
                } else if(this.user!==null && this.user.status  == 'success') {
                    this.alertService.success('Please check your email box.\n', this.options);
                    setTimeout(() =>
                        {
                            this.router.navigate(['login']).then();
                        },
                        2000);
                }
                else {
                    this.alertService.error('Login error\n', this.options);
                }
            });
        }
    }
}
