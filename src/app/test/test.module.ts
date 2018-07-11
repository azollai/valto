import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaceSearchModule } from '../common/place-search/place-search.module';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { TestComponent } from './test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.module';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FileUploadComponent } from './upload-image/upload-image.component';
import { FormatFileSizePipe } from './upload-image/format-file-size.pipe';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ImageCropperModule } from './upload-image/image-cropper/image-cropper.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TestComponent,
    // Image
    FileUploadComponent,
    FormatFileSizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    PlaceSearchModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,

    TestRoutingModule,

    AngularFireStorageModule,
    // Image
    ImageCropperModule,
    SlideshowModule
  ],
  providers: []
})
export class TestModule {}
