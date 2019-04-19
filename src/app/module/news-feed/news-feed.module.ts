import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsFeedComponent } from './news-feed.component';
import { FeedModule } from '../util/feed/feed.module';
import { NewsFeedRoutingModule } from './news-feed-routing.module';


@NgModule({
  declarations: [
    NewsFeedComponent,
  ],
  imports: [
    CommonModule,

    FeedModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule {}
