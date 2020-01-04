import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authService/auth.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string;
    password: string;
    isLoading = false;

    constructor(private alertController: AlertController, private navCtrl: NavController, private authService: AuthService) {
    }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Uyarı',
            message: 'Email veya şifre hatalıdır',
            buttons: [{
                text: 'Tamam',
                role: 'resume',
            }]
        });
        await alert.present();
    }

    loginClick() {
        this.isLoading = true;
        this.authService.serviceLogin(this.email, this.password).then(() => {
            this.navCtrl.navigateRoot('/posts').then(data => {
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            });
        }).catch(err => {
            this.isLoading = false;
            this.presentAlert();
        });

    }

}
