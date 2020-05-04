import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-gmap';
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    map: google.maps.Map;
    lat = 5.949090;
    lng = 80.571989;

    coordinates = new google.maps.LatLng(7.0008544, 80.7645785);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    constructor(private http: HttpClient) { }


    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
      var ur = 'http://localhost/googlemap/svr/report.php?action=district_count&session_id=ss9h138m6eptg7g4ffgn5p5511';

      this.http.get(ur).subscribe((res:any) => { 
       var district_count = res.details.district_count;
       console.log(district_count);
        var j;
 
      for(j=0;j<district_count.length;j++) { 
      var district = district_count[j].District;
      console.log(district);  

      var url = 'https://nominatim.openstreetmap.org/search.php?q='+ district+'+District&polygon_geojson=1&format=json';
      console.log(url);

      this.http.get(url).subscribe((res:any) => { 
        var location =  res[0].geojson.coordinates[0];
         console.log(location);
         console.log(location.length);
         var i;
         var city = [];
         for(i=0;i<location.length;i++) {
          // location[i].lat = location[i][0];
          // location[i].lng = location[i][1];
          city.push({lat: location[i][1], lng: location[i][0]});
         }
         console.log(city);
        //  var triangleCoords = [
        //   {lat: 80.5207784, lng: -80.190},
        //   {lat: 18.466, lng: -66.118},
        //   {lat: 32.321, lng: -64.757},
        //   {lat: 25.774, lng: -80.190}
        // ];
         var cityPolygone = new google.maps.Polygon({
          paths: city,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          // fillColor: '#FF0000',
          fillOpacity: 0.35
        });
  
        console.log(cityPolygone);
        cityPolygone.setMap(this.map);

      });
     }
   });

  } 
}