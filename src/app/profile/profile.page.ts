import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {NavController} from '@ionic/angular';
import {FirebaseService} from '../services/firebaseService/firebase.service';
import {AuthService} from '../services/authService/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    username: string;
    profilePic: string;
    cities = [];
    refCount: number;

    constructor(private firebaseService: FirebaseService, private navCtrl: NavController, private authS: AuthService) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            this.username = '@' + user.displayName;
            this.profilePic = user.photoURL;

            this.firebaseService.getCities(user.uid, (cities) => {
                this.cities = cities;
            });

            this.firebaseService.getRefs(user.uid, (refs) => {
                this.refCount = refs;
            });


        });
    }

    settingsClick() {
        this.navCtrl.navigateRoot('/profile-edit').catch((err) => {
            console.log(err);
        });
    }

    logOut() {
        this.authS.signOut().then(data => {
            this.navCtrl.navigateRoot('signup');
        });
    }

    gotoMyPosts() {
        this.navCtrl.navigateRoot('posts/my-posts').catch((err) => {
            console.log(err);
        });
    }

}
