import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the HowWorksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-works',
  templateUrl: 'how-works.html',
})
export class HowWorksPage {

  slides = [
    {
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      image: "assets/imgs/ica-slidebox-img-3.png",
    },
    {
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService) {
    this.loadSlides();
  }

  loadSlides () {
    var title1 = this.translate.instant('howworks.slide1.title');
    var description1 = this.translate.instant('howworks.slide1.description');
    this.slides[0]['title'] = title1;
    this.slides[0]['description'] = description1;

    var title2 = this.translate.instant('howworks.slide2.title');
    var description2 = this.translate.instant('howworks.slide2.description');
    this.slides[1]['title'] = title2;
    this.slides[1]['description'] = description2;

    var title3 = this.translate.instant('howworks.slide3.title');
    var description3 = this.translate.instant('howworks.slide3.description');
    this.slides[2]['title'] = title3;
    this.slides[2]['description'] = description3;

    var title4 = this.translate.instant('howworks.slide4.title');
    var description4 = this.translate.instant('howworks.slide4.description');
    this.slides[3]['title'] = title4;
    this.slides[3]['description'] = description4;
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowWorksPage');
  }

}
