import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import 'rxjs/add/operator/do';
import { AuthState } from './auth.state';
import 'rxjs/add/operator/map';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<boolean>;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private store: Store) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated() {
    return this.afAuth.authState.pipe(
      take(1),
      map((authState) => !!authState),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/welcome']);
        }
      })
    );
  }
}