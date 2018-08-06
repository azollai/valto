import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardPostModule } from '../common/card-post/card-post.module';
import { FeedService } from './feed.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    CardPostModule,
  ],
  providers: [FeedService]
})
export class TestModule {}
