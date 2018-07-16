import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PartnersMapPage } from '../pages/partners-map/partners-map';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from "@ionic-native/google-maps";
import { HTTP } from "@ionic-native/http";
import { KmlProvider } from '../providers/kml/kml';

@NgModule({
  declarations: [
    MyApp,
    PartnersMapPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PartnersMapPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    HTTP,
    KmlProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
