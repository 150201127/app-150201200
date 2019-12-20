import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { FirebaseService } from '../firebaseService/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new BehaviorSubject<any>({});

  serviceLogin(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  serviceSignup(email:string, password:string, username:string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((data)=>{
        firebase.auth().currentUser.updateProfile({
          displayName: username     
        });
      }).catch((err)=>{
        console.log("Verbose: " + err);
      });
  }

  constructor(){}
}