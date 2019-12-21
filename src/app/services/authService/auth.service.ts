import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {FirebaseService} from '../firebaseService/firebase.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    serviceLogin(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    serviceSignup(email: string, password: string, username: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                firebase.auth().currentUser.updateProfile({
                    displayName: username,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/couchsurfing-' +
                        '4b699.appspot.com/o/prof.png?alt=media&token=0fc198e8-e87e-4f2e-ac9e-0fd7241fd7c2',
                });
            }).catch((err) => {
            console.log('Verbose: ' + err);
        });
    }

    constructor() {
    }
}
