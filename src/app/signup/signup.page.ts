import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from '../services/authService/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    email: string;
    password: string;
    username: string;


    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    signup() {
        this.authService.serviceSignup(this.email, this.password, this.username);
    }

}
