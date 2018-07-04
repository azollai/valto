import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { TestComponent } from './test/test.component';
import { TestModule } from './test/test.module';
import { FormControlErrorMessagesComponent } from './common/form-control-error-messages/form-control-error-messages.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'valto' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    AuthModule,

    // temp
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
