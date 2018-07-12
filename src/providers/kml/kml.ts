import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import xml2js from 'xml2js';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the KmlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KmlProvider {

  constructor(private http: HTTP) {
    console.log('Hello KmlProvider Provider');
  }

  parseXML(data) {
    console.log ("parsing xml...");
     return new Promise(resolve => {
        var k,
            arr    = [],
            parser = new xml2js.Parser({
               trim: true,
               explicitArray: true
            });

        parser.parseString(data, function (err, result) {
           var obj = result.kml.Document;
           if (obj && obj.length > 0){
              obj = obj[0];     
           }
      
          for(k in obj.Placemark) {
            var item = obj.Placemark[k]; 
            var itemObject = {};
            itemObject['name'] = item.name ? item.name[0] : '';
            itemObject['description'] = item.description ? item.description[0] : '';
            itemObject['coordinates'] = item.Point ? item.Point[0].coordinates[0] : '';
            itemObject['lng'] = item.Point ? item.Point[0].coordinates[0].split(',')[0] : '';
            itemObject['lat'] = item.Point ? item.Point[0].coordinates[0].split(',')[1] : '';
            arr.push(itemObject);  
           }
          resolve(arr);
        });
     });
  }

  loadKml() {
    return new Promise(resolve => {
      console.log ("getting xml...");
      const kmlUrl = 'http://www.google.com/maps/d/kml?forcekml=1&mid=1Ec-RMhGJHWZAj6DEhWaloC9CavfgNxMo&lid=CwvafB05g8c';
      this.http.get(kmlUrl, {}, {})
      .then(data => resolve(this.parseXML(data.data)))
    });
  }
}
