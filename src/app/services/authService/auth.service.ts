import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {FirebaseService} from '../firebaseService/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLoggedIn = false;

    constructor(private firebaseService: FirebaseService) {
    }

    serviceLogin(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    serviceLogOut() {
        firebase.auth().signOut();
    }

    serviceSignup(email: string, password: string, username): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            return firebase.auth().currentUser.updateProfile({
                displayName: username,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/couchsurfing-' +
                    '4b699.appspot.com/o/prof.png?alt=media&token=0fc198e8-e87e-4f2e-ac9e-0fd7241fd7c2',
            }).then(() => {
                firebase.auth().onAuthStateChanged((user) => {
                    if (user != null) {
                        this.firebaseService.setRefsZero(user.uid);
                    }
                });
            });
        });
    }

    authenticated(): boolean {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        });

        return this.isLoggedIn;
    }
}
