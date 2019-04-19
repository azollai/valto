import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorMessagesComponent } from './form-control-error-messages.component';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [FormControlErrorMessagesComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    FormControlErrorMessagesComponent
  ]
})
export class FormControlErrorMessagesModule {}
