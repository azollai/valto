import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
  // { path: 'welcome', loadChildren: 'app/welcome/welcome.module#WelcomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {

}
