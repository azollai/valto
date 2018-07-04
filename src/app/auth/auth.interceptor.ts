import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(store => store.auth.token)
               .take(1)
               .switchMap(
                 (token: string) => {
                   const copiedReq = req.clone({ params: req.params.set('auth', token) });
                   return next.handle(copiedReq);
                 });
  }
}
