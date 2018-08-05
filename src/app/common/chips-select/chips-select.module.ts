import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsSelectComponent } from './chips-select.component';
import { MatAutocompleteModule, MatChipsModule, MatIconModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlErrorMessagesModule } from '../form-control-error-messages/form-control-error-messages.module';

@NgModule({
  declarations: [ChipsSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,

    FormControlErrorMessagesModule
  ],
  exports: [
    ChipsSelectComponent
  ]
})
export class ChipsSelectModule {}
