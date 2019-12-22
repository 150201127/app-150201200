import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';
import {FirebaseService} from '../services/firebaseService/firebase.service';
import {AuthService} from '../services/authService/auth.service';
import {NavController} from '@ionic/angular';


@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.page.html',
    styleUrls: ['./profile-edit.page.scss'],
})


export class ProfileEditPage implements OnInit {

    email: string;
    username: string;
    uid: string;
    currentCity: {};
    updatedProfilPic: any;
    isPpUpdated = false;
    selectedCitiesFire;

    cities: any[] = [
        {
            plate: 1,
            name: 'Adana'
        },
        {
            plate: 2,
            name: 'ADIYAMAN'
        },
        {
            plate: 3,
            name: 'AFYONKARAHİSAR'
        },
        {
            plate: 4,
            name: 'AĞRI'
        },
        {
            plate: 5,
            name: 'AMASYA'
        },
        {
            plate: 6,
            name: 'ANKARA'
        },
        {
            plate: 7,
            name: 'ANTALYA'
        },
        {
            plate: 8,
            name: 'ARTVİN'
        },
        {
            plate: 9,
            name: 'AYDIN'
        },
        {
            plate: 10,
            name: 'BALIKESİR'
        },
        {
            plate: 11,
            name: 'BİLECİKK'
        },
        {
            plate: 12,
            name: 'BİNGÖL'
        },
        {
            plate: 13,
            name: 'BİTLİS'
        },
        {
            plate: 14,
            name: 'BOLU'
        },
        {
            plate: 15,
            name: 'BURDUR'
        },
        {
            plate: 16,
            name: 'BURSA'
        },
        {
            plate: 17,
            name: 'ÇANAKKALE'
        },
        {
            plate: 18,
            name: 'ÇANKIRI'
        },
        {
            plate: 19,
            name: 'ÇORUM'
        },
        {
            plate: 20,
            name: 'DENİZLİ'
        },
        {
            plate: 21,
            name: 'DİYARBAKIR'
        },
        {
            plate: 22,
            name: 'EDİRNE'
        },
        {
            plate: 23,
            name: 'ELAZIĞ'
        },
        {
            plate: 24,
            name: 'ERZİNCAN'
        },
        {
            plate: 25,
            name: 'ERZURUM'
        },
        {
            plate: 26,
            name: 'ESKİŞEHİR'
        },
        {
            plate: 27,
            name: 'GAZİANTEP'
        },
        {
            plate: 28,
            name: 'GİRESUN'
        },
        {
            plate: 29,
            name: 'GÜMÜŞHANE'
        },
        {
            plate: 30,
            name: 'HAKKARİ'
        },
        {
            plate: 31,
            name: 'HATAY'
        },
        {
            plate: 32,
            name: 'ISPARTA'
        },
        {
            plate: 33,
            name: 'MERSİN'
        },
        {
            plate: 34,
            name: 'İSTANBUL'
        },
        {
            plate: 35,
            name: 'İZMİR'
        },
        {
            plate: 36,
            name: 'KARS'
        },
        {
            plate: 37,
            name: 'KASTAMONU'
        },
        {
            plate: 38,
            name: 'KAYSERİ'
        },
        {
            plate: 39,
            name: 'KIRKLARELİ'
        },
        {
            plate: 40,
            name: 'KIRŞEHİR'
        },
        {
            plate: 41,
            name: 'KOCAELİ'
        },
        {
            plate: 42,
            name: 'KONYA'
        },
        {
            plate: 43,
            name: 'KÜTAHYA'
        },
        {
            plate: 44,
            name: 'MALATYA'
        },
        {
            plate: 45,
            name: 'MANİSA'
        },
        {
            plate: 46,
            name: 'KAHRAMANMARAŞ'
        },
        {
            plate: 47,
            name: 'MARDİN'
        },
        {
            plate: 48,
            name: 'MUĞLA'
        },
        {
            plate: 49,
            name: 'MUŞ'
        },
        {
            plate: 50,
            name: 'NEVŞEHİR'
        },
        {
            plate: 51,
            name: 'NİĞDE'
        },
        {
            plate: 52,
            name: 'ORDU'
        },
        {
            plate: 53,
            name: 'RİZE'
        },
        {
            plate: 54,
            name: 'SAKARYA'
        },
        {
            plate: 55,
            name: 'SAMSUN'
        },
        {
            plate: 56,
            name: 'SİİRT'
        },
        {
            plate: 57,
            name: 'SİNOP'
        },
        {
            plate: 58,
            name: 'SİVAS'
        },
        {
            plate: 59,
            name: 'TEKİRDAĞ'
        },
        {
            plate: 60,
            name: 'TOKAT'
        },
        {
            plate: 61,
            name: 'TRABZON'
        },
        {
            plate: 62,
            name: 'TUNCELİ'
        },
        {
            plate: 63,
            name: 'ŞANLIURFA'
        },
        {
            plate: 64,
            name: 'UŞAK'
        },
        {
            plate: 65,
            name: 'VAN'
        },
        {
            plate: 66,
            name: 'YOZGAT'
        },
        {
            plate: 67,
            name: 'ZONGULDAK'
        },
        {
            plate: 68,
            name: 'AKSARAY'
        },
        {
            plate: 69,
            name: 'BAYBURT'
        },
        {
            plate: 70,
            name: 'KARAMAN'
        },
        {
            plate: 71,
            name: 'KIRIKKALE'
        },
        {
            plate: 72,
            name: 'BATMAN'
        },
        {
            plate: 73,
            name: 'ŞIRNAK'
        },
        {
            plate: 74,
            name: 'BARTIN'
        },
        {
            plate: 75,
            name: 'ARDAHAN'
        },
        {
            plate: 76,
            name: 'IĞDIR'
        },
        {
            plate: 77,
            name: 'YALOVA'
        },
        {
            plate: 78,
            name: 'KARABÜK'
        },
        {
            plate: 79,
            name: 'KİLİS'
        },
        {
            plate: 80,
            name: 'OSMANİYE'
        },
        {
            plate: 81,
            name: 'DÜZCE'
        },
    ];

    selectedCities: any[] = [];

    constructor(private firebaseService: FirebaseService,
                public alertController: AlertController,
                private camera: Camera,
                private authService: AuthService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user);
                this.email = user.email;
                this.username = user.displayName;
                this.updatedProfilPic = user.photoURL;
                this.uid = user.uid;
            }
            // buraya data cek
        });


    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Uyarı',
            message: 'Profil resmi olarak sadece kare resim aldığımız için. Kamerayı kullandıktan sonra ' +
                'gelen kesme işlemini onaylayınız.',
            buttons: [{
                text: 'Tamam',
                role: 'resume',
                handler: () => {
                    this.openCamera();
                }
            }]
        });
        await alert.present();
    }

    saveClick() {
        if (this.isPpUpdated) {
            this.firebaseService.updateProfilePic(this.uid, this.updatedProfilPic).then(() => {
                this.firebaseService.uploadCities(this.uid, this.selectedCities).then(() => {
                    this.navCtrl.navigateRoot('/profile');
                });
            });
        } else {
            this.firebaseService.uploadCities(this.uid, this.selectedCities).then(() => {
                this.navCtrl.navigateRoot('/profile');
            });
        }

    }

    deleteCityClick(i: number) {
        this.selectedCities.splice(i, 1);
    }

    addCityClick() {
        if (!this.selectedCities.includes(this.currentCity)) {
            this.selectedCities.push(this.currentCity);
        }
    }

    ppSettingClick() {
        this.presentAlert();
    }

    openCamera() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 250,
            targetHeight: 250,
            allowEdit: true,
        };

        this.camera.getPicture(options).then((imageData) => {
            this.updatedProfilPic = 'data:image/jpeg;base64,' + imageData;
            this.isPpUpdated = true;
        }, (err) => {
        });
    }


}
