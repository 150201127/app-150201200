import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authService/auth.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    email: string;
    password: string;
    username: string;
    isLoading = false;


    constructor(private alertController: AlertController, private navCtrl: NavController, private authService: AuthService) {
    }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Uyarı',
            message: 'Aşağıdakileri kontrol ediniz<br>Şifreniz en az 8 karakter olmalı<br>Email adresinizin doğruluğunu kontrol ediniz',
            buttons: [{
                text: 'Tamam',
                role: 'resume',
            }]
        });
        await alert.present();
    }

    signup() {
        this.isLoading = true;
        this.authService.serviceSignup(this.email, this.password, this.username).then(() => {
            this.navCtrl.navigateRoot('posts').catch((err) => {
                console.log(err);
            });
            this.isLoading = false;
        }).catch((err) => {
            this.isLoading = false;
            this.presentAlert();
        });
    }

}
