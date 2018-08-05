import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaceSearchModule } from '../common/place-search/place-search.module';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatStepperModule
} from '@angular/material';
import { TestComponent } from './test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.module';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ImageCropperModule } from '../common/image-wrapper/image-cropper/image-cropper.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageWrapperModule } from '../common/image-wrapper/image-wrapper.module';
import { ChipsSelectModule } from '../common/chips-select/chips-select.module';
import { FormControlErrorMessagesModule } from '../common/form-control-error-messages/form-control-error-messages.module';


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
    MatStepperModule,

    TestRoutingModule,

    AngularFireStorageModule,
    ImageWrapperModule,

    MatCardModule,
    ChipsSelectModule,
    FormControlErrorMessagesModule
  ],
  providers: []
})
export class TestModule {}
