import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyFeedComponent } from './my-feed.component';

const routes: Routes = [
  { path: '', component: MyFeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyFeedRoutingModule {

}
