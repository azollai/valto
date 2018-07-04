import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'test', component: TestComponent },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
  // { path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
