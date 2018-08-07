import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { FeedModule } from '../common/feed/feed.module';


@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    FeedModule
  ]
})
export class TestModule {}
