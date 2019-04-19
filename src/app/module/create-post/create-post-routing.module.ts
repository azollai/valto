import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatePostComponent } from './create-post.component';

const routes: Routes = [
  { path: '', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreatePostRoutingModule {

}
