import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formdata;

    constructor() {
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
        console.log(this.formdata.invalid);
        if (this.formdata.invalid) {
            this.formdata.get('email').markAsTouched({onlySelf:true});
            this.formdata.get('password').markAsTouched({onlySelf:true});
        } else {
            alert("Now you are done with angularauthlign Part 1.");
        }
    }
}
