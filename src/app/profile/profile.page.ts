import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {NavController} from '@ionic/angular';
import {FirebaseService} from '../services/firebaseService/firebase.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    username: string;
    profilePic: string;
    cities = [];

    constructor(private firebaseService: FirebaseService, private navCtrl: NavController) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            this.username = '@' + user.displayName;
            this.profilePic = user.photoURL;

            this.firebaseService.getCities(user.uid).subscribe(data => {
                this.cities = Object.values(data.data().cities);
            });;
        });
    }

    settingsClick() {
        this.navCtrl.navigateRoot('/profile-edit').catch((err) => {
            console.log(err);
        });
    }

}
