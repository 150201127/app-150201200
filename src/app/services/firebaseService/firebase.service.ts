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

    setRefsZero(uid: string) {
        return this.fireStore.collection('refs').doc(uid).set({
            ref: 0,
        });
    }

    setRefs(uid: string, refCount) {
        return this.fireStore.collection('refs').doc(uid).set({
            ref: refCount,
        });
    }

    getRefs(uid: string, callback) {
        this.fireStore.collection('refs').doc(uid).get().subscribe(data => {
            if (data.data() != null) {
                const refs = Object.values(data.data());
                callback(refs[0]);
            }
        });
    }

    updateRefs(uid: string, isIncrease: boolean) {
        this.getRefs(uid, (refC) => {
            if (isIncrease) {
                this.setRefs(uid, (refC + 1));
            } else {
                this.setRefs(uid, (refC - 1));
            }
        });
    }

    getCities(uid: string, callback) {
        return this.fireStore.collection('cities').doc(uid).get().subscribe(data => {
            if (data.data() != null) {
                callback(Object.values(data.data().cities));
            }
        });
    }


}
