import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { CoreModule } from './module/core/core.module';
import { AuthModule } from './module/auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { PostState } from './state/post.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'valto' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    // TODO:are you sure, that PostState should be here?
    NgxsModule.forRoot([PostState]),

    // temp
    // TestModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
