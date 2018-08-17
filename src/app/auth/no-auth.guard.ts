import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Select, Store } from '@ngxs/store';
import 'rxjs/add/operator/do';
import { AuthState } from './ngxs/auth.state';
import 'rxjs/add/operator/map';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class NoAuthGuard implements CanActivate, CanLoad {
  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<boolean>;

  constructor(private router: Router,
              private afAuth: AngularFireAuth) {
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
      map((authState) => !authState),
      tap(notAuthenticated => {
        debugger;
        if (!notAuthenticated) {
          this.router.navigate(['/test']);
        }
      })
    );
  }
}
