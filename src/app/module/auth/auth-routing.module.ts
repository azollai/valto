import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FinishSignupComponent } from './component/signup/finish-signup/finish-signup.component';
import { AuthGuard } from '../../guard/auth.guard';
import { NoAuthGuard } from '../../guard/no-auth.guard';

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
