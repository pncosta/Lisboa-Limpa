import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from "@ionic-native/google-maps";
import { HTTP } from "@ionic-native/http";
import { AppVersion } from '@ionic-native/app-version';
/* My imports */
import { PartnersMapPage } from '../pages/partners-map/partners-map';
import { AboutPage } from '../pages/about/about';
import { HowWorksPage } from '../pages/how-works/how-works';
import { ContactPage } from '../pages/contact/contact';
import { KmlProvider } from '../providers/kml/kml';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    PartnersMapPage,
    ContactPage,
    AboutPage,
    HowWorksPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PartnersMapPage,
    ContactPage,
    AboutPage,
    HowWorksPage
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    HTTP,
    AppVersion,
    KmlProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
