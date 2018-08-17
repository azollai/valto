import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import * as authActions from './auth/ngxs/auth.classes';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private store: Store) {}

  ngOnInit() {
    this.initAuthListener();
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new authActions.SetUser(user));
      } else {
        this.store.dispatch([
          new authActions.DeleteUser()
        ]);
      }
    });
  }
}
