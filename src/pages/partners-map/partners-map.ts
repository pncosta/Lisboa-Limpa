import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions, 
  GoogleMapsEvent,
  GoogleMapsAnimation,
  MyLocation,
  MarkerOptions
} from '@ionic-native/google-maps';


import { KmlProvider } from '../../providers/kml/kml';


@Component({
  selector: 'page-partners-map',
  templateUrl: 'partners-map.html'
})
export class PartnersMapPage {

  mapReady: boolean = false;
  map: GoogleMap;

  title: string = 'nenhum';
  zone;

  constructor( private kml: KmlProvider) {
  }

  ionViewDidLoad() {
    this.zone = new NgZone({ enableLongStackTrace: false }); // needed to update variable on the view
    this.loadMap();
    this.loadPlacemarks();
    this.zoomToCurrentPosition();
   
    
  }

  loadPlacemarks() {
    this.kml.loadKml().then(r => {
      var k;
      for(k in r) {
        const item = r[k];
        let options: MarkerOptions = this.getMarkerFromObject(item);
        let marker = this.map.addMarkerSync(options);
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          // this.zone.run - needed to update variable on the view
          this.zone.run(() => { this.title = marker.getTitle(); }); 
        });
      }
    });
  }
  
  private getMarkerFromObject (item): MarkerOptions {
    let options: MarkerOptions = {
      icon: {
        url: 'assets/imgs/lisboalimpaplacemark.png',
        size: {
          width: 32,
          height: 46
        }
      },
    
      title: item.name,
      position: {lat: item.lat, lng: item.lng},
      infoWindowAnchor: [16, 0],
      anchor: [16, 32],
      flat: false,
      visible: true,
    
      styles: {
        'text-align': 'center',
        'font-weight': 'bold',
        'color': 'green'
      },
    
      animation: GoogleMapsAnimation.DROP,
      zIndex: 0,
      disableAutoPan: false
    };
    return options;
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 38.736,
           lng: -9.14
         },
         zoom: 13,

        
       }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.setMyLocationEnabled(true);
    this.map.setMyLocationButtonEnabled(true);
  }

  zoomToCurrentPosition() {
    this.map.getMyLocation()
      .then((location: MyLocation) => {    
        // Move the map camera to the location with animation
        return this.map.animateCamera({
          target: location.latLng,
          zoom: 13
        })
      }); 
  }

  showToast(message: string) {

   console.log(message);
  }
}