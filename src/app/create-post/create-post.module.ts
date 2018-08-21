import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreateUpdatePostModule } from '../common/create-update-post/create-update-post.module';
import { PostState } from '../state/post.state';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [
    CreatePostComponent,
  ],
  imports: [
    CommonModule,

    CreateUpdatePostModule,
    CreatePostRoutingModule,
  ],
  exports: [CreatePostComponent]
})
export class CreatePostModule {}
