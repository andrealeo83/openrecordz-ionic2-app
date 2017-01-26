import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecordService} from '../../providers/record-service';
import { Geolocation, GoogleMap } from 'ionic-native';

declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers:[RecordService]
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  public records: any;
  private recordsLoaded = false;
  private bounds: any;

 constructor(public navCtrl: NavController, public recordService: RecordService) {
    console.log("MapPage.constructor");
   // this.loadRecord();
  }

// Load map only after view is initialize
ngAfterViewInit() {
 this.loadMap();
}


ngOnInit(){
  //this.loadMap();
  this.loadRecord();
}



 loadRecord(){
    this.recordService.load("580f95abe4b0f83baf145918")
    .then(data => {
      this.recordsLoaded=true;
      console.log("recordsLoaded ",this.recordsLoaded);
      this.records = data;

       console.log("adding markers");
        for(let loc of this.records){
         // console.log("loc._latitude ",loc._latitude);
         //  console.log("loc._longitude ",loc._longitude);
           if (loc._longitude && loc._latitude) {
            this.addMarker(parseFloat(loc._latitude), parseFloat(loc._longitude));
            //this.map.fitBounds(this.bounds);       // auto-zoom
            //this.map.panToBounds(this.bounds);    // auto-center
           }
          //this.addMarker();
	    		}


    });
  }


  /*ionViewLoaded(){
    console.log("ionViewLoaded");
    this.loadMap();
  }*/

  loadMap(){

  Geolocation.getCurrentPosition().then((position) => {
      this.bounds  = new google.maps.LatLngBounds();
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   /*    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
          //this.setMarker();
        //  this.addMarker();
  });*/

    }, (err) => {
      console.log(err);
    });

    /*let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);*/


  }

addMarker(lat,lon){
  //let latLng = new google.maps.LatLng(-34.9290, 138.6010);

  let latLng = new google.maps.LatLng(lat, lon);
  //this.bounds.extend(latLng);
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latLng
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}

addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}

}
