import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedComponent } from './feed.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FeedService } from './feed.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TestRoutingModule } from '../../test/test-routing.module';
import { CardPostModule } from '../card-post/card-post.module';
import { FeedFilterModule } from '../feed-filter/feed-filter.module';


@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    CardPostModule,

    FeedFilterModule
  ],
  providers: [FeedService],
  exports: [FeedComponent]
})
export class FeedModule {}
