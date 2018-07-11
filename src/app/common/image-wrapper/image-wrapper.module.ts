import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageWrapperComponent } from './image-wrapper.component';
import { ImageCropperModule } from './image-cropper/image-cropper.module';


@NgModule({
  declarations: [
    // Image
    ImageWrapperComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,

    AngularFireStorageModule,
    // Image
    ImageCropperModule,
    SlideshowModule
  ],
  exports: [
    ImageWrapperComponent
  ]
})
export class ImageWrapperModule {}
