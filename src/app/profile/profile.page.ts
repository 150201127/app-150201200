import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    username: string;

    constructor() {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            this.username = user.displayName;
        });
    }

}
