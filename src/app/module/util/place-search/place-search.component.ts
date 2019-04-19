import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LatLngLiteral, MapsAPILoader } from '@agm/core';
// import PlaceResult = google.maps.places.PlaceResult;
// import PlaceResult = google.maps.places.PlaceResult;
import { google } from '@agm/core/services/google-maps-types';
// import PlaceResult = google.maps.places.PlaceResult;
// import { google } from '@agm/core/services/google-maps-types';
// declare namespace google.maps.places {
//   export interface PlaceResult { geometry; }
// }
// import { google } from '@agm/core/services/google-maps-types';

// import 'googlemaps';

// import{} from 'googlemaps'

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.scss']
})
export class PlaceSearchComponent implements OnInit {

  @Input() latitude: number;

  @Input() longitude: number;
  @Input() scrollWheel: boolean;
  @Input() zoom: number;
  @Input() mapVisible = true;

  @Input() searchElementRef: ElementRef;
  @Input() searchControl: FormControl;
  @Input() gpsEmitter: EventEmitter<any>;
  @Output() centerChange = new EventEmitter<LatLngLiteral>();
  @ViewChild('map')
  public mapElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.zoom = 12;
        this.getLocationByCoordinates();
      }, err => {
        console.error(err);
      });
    }
  }

  locationNameCallback(results: any[]) {
    if (results.length > 0) {
      this.searchElementRef.nativeElement.value = results[0].formatted_address;
    }
  }

  locationCoordinatesCallback(results: any[], status) {
    if (results.length > 0) {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      this.zoom = 12;
    } else {
      console.error('Kezdj el gépelni és válassz a legördülő listából!');
    }
  }

  subscribeToGpsEmitter() {
    if (this.gpsEmitter) {
      this.gpsEmitter.subscribe(() => this.getLocation());
    }
  }

  ngOnInit() {
    this.subscribeToGpsEmitter();

    // set google maps defaults
    this.zoom = 7;
    this.longitude = 19.040235;
    this.latitude = 47.497912;
    this.scrollWheel = true;

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: any = autocomplete.getPlace();
          if (place.geometry) {
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          } else {
            // if location coordinates are not given
            this.getLocationByName(place.name);
          }
        });
      });
    });
  }

  getLocationByName(query: string) {
    const request = {
      query: query
    };
    const realMap = new google.maps.Map(this.mapElementRef.nativeElement);
    const service = new google.maps.places.PlacesService(realMap);
    service.textSearch(request, this.locationCoordinatesCallback.bind(this));
  }

  getLocationByCoordinates() {
    const serviceGeo = new google.maps.Geocoder;
    serviceGeo.geocode({ location: { lat: this.latitude, lng: this.longitude } }, this.locationNameCallback.bind(this));
  }
}
