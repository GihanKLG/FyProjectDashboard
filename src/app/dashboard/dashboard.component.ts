import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { google } from "google-maps";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
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
  } 
}
