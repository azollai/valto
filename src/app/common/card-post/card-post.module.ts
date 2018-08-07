import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { CardPostComponent } from './card-post.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageWrapperModule } from '../image-wrapper/image-wrapper.module';


@NgModule({
  declarations: [
    CardPostComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,

    AngularFireStorageModule,
    ImageWrapperModule,
    MatCardModule,
  ],
  exports: [
    CardPostComponent
  ]
})
export class CardPostModule {}
