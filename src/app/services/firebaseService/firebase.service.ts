import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private fireStore: AngularFirestore) {
    }


    updateProfilePic(uid: string, updatedProfilePic: any): Promise<any> {

        const imageRef = firebase.storage().ref().child('ProfilePics/' + uid + '.jpg');

        return imageRef.putString(updatedProfilePic, firebase.storage.StringFormat.DATA_URL)
            .then((snapshot) => {

                return imageRef.getDownloadURL().then((data) => {
                    return firebase.auth().currentUser.updateProfile({
                        photoURL: data,
                    });
                });


            });
    }

    uploadCities(uid: string, cities: any[]): Promise<any> {
        return this.fireStore.collection('cities').doc(uid).set({
            cities
        });
    }

    getCities(uid: string) {
        return this.fireStore.collection('cities').doc('cdGWZzKjJ7SFAiL5PiMNo5KWrHL2').get().subscribe(data => {
            console.log(data.data());
        });
    }
}
