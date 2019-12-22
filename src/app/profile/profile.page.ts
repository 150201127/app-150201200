import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    username: string;
    profilePic: string;
    selectedCities = ['Ankara', 'Istanbul', 'Izmir', 'Kocaeli', 'Eskisehir'];

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            this.username = '@' + user.displayName;
            this.profilePic = user.photoURL;
        });
    }

    settingsClick() {
        this.navCtrl.navigateRoot('/profile-edit').catch((err) => {
            console.log(err);
        });
    }

}
