import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FinishSignupComponent } from './signup/finish-signup/finish-signup.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] },
  { path: 'finish-signup', component: FinishSignupComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard, NoAuthGuard]
})
export class AuthRoutingModule {}
