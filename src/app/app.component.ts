import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PartnersMapPage } from '../pages/partners-map/partners-map';
import { ContactPage } from '../pages/contact/contact';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
    rootPage: any = PartnersMapPage;
    pages: Array<{title: string, component: any}>;

   constructor( public platform: Platform, 
                public statusBar: StatusBar, 
                public splashScreen: SplashScreen, 
                private translate: TranslateService) {
    this.pages = [];
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackOpaque;
      this.splashScreen.hide();
    });

    // Loads i18n configs
    this.initTranslate();
    //Load and push translated menu entries
    this.translate.get('menu.partnersmap').subscribe(
      v => this.pages.push( { title: v, component: PartnersMapPage  })) ;

    this.translate.get('menu.contacts').subscribe(
      v => this.pages.push( { title: v, component: ContactPage  })) ;
   
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');


    if (this.translate.getBrowserLang() !== undefined) {
        this.translate.use(this.translate.getBrowserLang());
    } else {
        this.translate.use('en'); // Set your language here
    }

}

  
}

