import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAeBhGFzs-5WC-9WU-Olmxi-seYLKvcMbQ',
      authDomain: 'valto-214b6.firebaseapp.com',
    });
  }

}
