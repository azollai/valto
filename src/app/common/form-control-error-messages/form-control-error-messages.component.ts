import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-form-control-error-messages',
  templateUrl: './form-control-error-messages.component.html',
})
export class FormControlErrorMessagesComponent implements OnChanges {
  errorMessages = {
    required: 'Ez a mező kötelező',
    minlength: 'Legalább x karakter hosszú kell legyen',
    email: 'Létező email címet adj meg',
    digitCharacterRule: 'Legalább x mennyiségű szám kell szerepeljen benne',
    alphabeticalCharacterRule: 'Legalább x mennyiségű betű kell szerepeljen benne',
    lowercaseCharacterRule: 'Legalább x mennyiségű kis betú kell szerepeljen benne',
    uppercaseCharacterRule: 'Legalább x mennyiségű nagy betú kell szerepeljen benne',
    mismatchedPasswords: 'A két jelszó nem egyezik meg'
  };

  @Input() errorKeys: ValidationErrors;
  firstErrorKey: string;
  requiredLength: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errorKeys.currentValue) {
      this.firstErrorKey = Object.keys(changes.errorKeys.currentValue)[0];
      if (this.firstErrorKey === 'minlength' || this.firstErrorKey === 'maxlength') {
        this.requiredLength = Object.values(changes.errorKeys.currentValue)[0]['requiredLength'];
      } else {
        if (this.firstErrorKey === 'digitCharacterRule' || this.firstErrorKey === 'alphabeticalCharacterRule' ||
          this.firstErrorKey === 'lowercaseCharacterRule' || this.firstErrorKey === 'uppercaseCharacterRule') {
          this.requiredLength = Object.values(changes.errorKeys.currentValue)[0]['required'];
        } else {
          this.requiredLength = undefined;
        }
      }
    }
  }

}
