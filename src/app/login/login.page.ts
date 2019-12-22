import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from '../services/authService/auth.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string;
    password: string;

    constructor(private navCtrl: NavController, private authService: AuthService) {
    }

    ngOnInit() {
    }

    loginClick() {
        this.authService.serviceLogin(this.email, this.password).then(() => {
            this.navCtrl.navigateRoot('/profile').catch((err) => {
                console.log(err);
            });
        });

    }

}
