import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [NoAuthGuard] },
  { path: 'test', loadChildren: './test/test.module#TestModule', canLoad: [AuthGuard] },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
  // { path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, NoAuthGuard]
})

export class AppRoutingModule {

}
