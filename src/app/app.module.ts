import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';
import {PortalModule} from './portal/portal.module';
import {PlayerModule} from './player/player.module';
import * as firebase from 'firebase';
import {environment} from 'src/environments/environment';
import {Camera} from '@ionic-native/camera/ngx';
import {ToastController} from '@ionic/angular';


firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        PortalModule,
        PlayerModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        SQLite,
        Camera,
        ToastController,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
