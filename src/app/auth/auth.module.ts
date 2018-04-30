import { NgModule } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ],
  exports: [],
  providers: [AuthService]
})
export class AuthModule {}
