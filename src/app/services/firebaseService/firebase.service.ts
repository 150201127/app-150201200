import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor() {
    }


    updateProfilePic(uid: string, updatedProfilePic: any) {
        const storageRef = firebase.storage().ref();

        const imageRef = storageRef.child('images/' + uid + '.jpg');

        imageRef.putString(updatedProfilePic, firebase.storage.StringFormat.DATA_URL)
            .then((snapshot) => {

                imageRef.getDownloadURL().then((data) => {
                    firebase.auth().currentUser.updateProfile({
                        photoURL: data,
                    });
                });


            });
    }
}
