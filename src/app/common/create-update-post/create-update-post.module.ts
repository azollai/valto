import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatStepperModule
} from '@angular/material';
import { CreateUpdatePostComponent } from './create-update-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControlErrorMessagesModule } from '../form-control-error-messages/form-control-error-messages.module';
import { ChipsSelectModule } from '../chips-select/chips-select.module';
import { PlaceSearchModule } from '../place-search/place-search.module';
import { ImageWrapperModule } from '../image-wrapper/image-wrapper.module';


@NgModule({
  declarations: [
    CreateUpdatePostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireStorageModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatCardModule,

    PlaceSearchModule,
    ChipsSelectModule,
    FormControlErrorMessagesModule,
    ImageWrapperModule
  ],
  exports: [
    CreateUpdatePostComponent
  ]
})
export class CreateUpdatePostModule {}
