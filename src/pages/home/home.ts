import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HTTP } from '@ionic-native/http';
import xml2js from 'xml2js';
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,private http: HTTP) {

  }

  ionViewDidLoad() {
    this.showMap();
   
  }



  showMap() {
    const location = new google.maps.LatLng(39,-9);

    const options = {
      center: location,
      zoom: 13
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    var ctaLayer = new google.maps.KmlLayer({
      url: 'http://www.google.com/maps/d/kml?forcekml=1&mid=1Ec-RMhGJHWZAj6DEhWaloC9CavfgNxMo&lid=CwvafB05g8c',
      //url: 'http://www.google.com/maps/d/kml?forcekml=1&mid=1M2Y6bIXjkG-JkrxIc5iBR1fL_P6RHlPj&default_icons',
      // url: 'https://www.google.com/maps/d/kml?mid=1M2Y6bIXjkG-JkrxIc5iBR1fL_P6RHlPj&nl=1&forcekml=1',
      map: this.map
    });
  }

}
