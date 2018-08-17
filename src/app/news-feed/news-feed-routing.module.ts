import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsFeedComponent } from './news-feed.component';

const routes: Routes = [
  { path: '', component: NewsFeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewsFeedRoutingModule {

}
