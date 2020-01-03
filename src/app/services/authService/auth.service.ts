import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {FirebaseService} from '../firebaseService/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isLoggedIn = false;

    constructor(private firebaseService: FirebaseService) {
    }

    serviceLogin(email: string, password: string): Promise<any> {
        this.isLoggedIn = true;
        return firebase.auth().signInWithEmailAndPassword(email, password);
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
                        this.isLoggedIn = true;
                        this.firebaseService.setRefsZero(user.uid);
                    }
                });
            });
        });
    }

    signOut() {
        this.isLoggedIn = false;
        return firebase.auth().signOut();
    }
}
