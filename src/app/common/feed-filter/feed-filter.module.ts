import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedFilterComponent } from './feed-filter.component';
import { MatButtonModule, MatIconModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChipsSelectModule } from '../chips-select/chips-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FeedFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    ChipsSelectModule,

    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [FeedFilterComponent]
})
export class FeedFilterModule {}
