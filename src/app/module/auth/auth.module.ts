import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import { SignupComponent } from './component/signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaceSearchModule } from '../util/place-search/place-search.module';
import { FinishSignupComponent } from './component/signup/finish-signup/finish-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControlErrorMessagesModule } from '../util/form-control-error-messages/form-control-error-messages.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FinishSignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    NgxsModule.forFeature([AuthState]),
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,

    PlaceSearchModule,
    FormControlErrorMessagesModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule {}
