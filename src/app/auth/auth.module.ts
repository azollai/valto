import { NgModule } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth.state';
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
import { SignupComponent } from './signup/signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlaceSearchModule } from '../common/place-search/place-search.module';
import { FinishSignupComponent } from './signup/finish-signup/finish-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControlErrorMessagesModule } from '../common/form-control-error-messages/form-control-error-messages.module';
import { AuthGuard } from './auth.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

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
    AuthRoutingModule,
    FlexLayoutModule,
    NgxsModule.forFeature([AuthState]),
    HttpClientModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,

    PlaceSearchModule,
    FormControlErrorMessagesModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,

    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports: [],
  providers: [AuthService]
})
export class AuthModule {}
