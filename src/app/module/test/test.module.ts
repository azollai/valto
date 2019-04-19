import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { FeedModule } from '../util/feed/feed.module';
import { TestRoutingModule } from './test-routing.module';


@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    FeedModule,
    TestRoutingModule
  ]
})
export class TestModule {}
