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
import { SlideshowModule } from 'ng-simple-slideshow';
import { ImageCropperModule } from '../common/upload-image/image-cropper/image-cropper.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageWrapperModule } from '../common/upload-image/image-wrapper.module';


@NgModule({
  declarations: [
    TestComponent,
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
    ImageWrapperModule
  ],
  providers: []
})
export class TestModule {}
