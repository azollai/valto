import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreateUpdatePostModule } from '../common/create-update-post/create-update-post.module';


@NgModule({
  declarations: [
    CreatePostComponent,
  ],
  imports: [
    CommonModule,

    CreateUpdatePostModule,
    CreatePostRoutingModule
  ],
  exports: [CreatePostComponent]
})
export class CreatePostModule {}
