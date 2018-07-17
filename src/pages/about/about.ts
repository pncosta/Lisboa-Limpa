import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  public versionNumber: string;
  public code: string;
  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private appVersion: AppVersion) {
      appVersion.getVersionNumber().then(v => this.versionNumber = v);
      appVersion.getAppName().then(v => this.name = v);;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
