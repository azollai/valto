import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyFeedComponent } from './my-feed.component';
import { FeedModule } from '../common/feed/feed.module';
import { MyFeedRoutingModule } from './my-feed-routing.module';


@NgModule({
  declarations: [
    MyFeedComponent,
  ],
  imports: [
    CommonModule,

    FeedModule,
    MyFeedRoutingModule
  ]
})
export class MyFeedModule {}
