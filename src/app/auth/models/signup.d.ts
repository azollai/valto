import { GraduationEnum } from './graduation.enum';
import { LatLngLiteral } from '@agm/core';

export class SignupModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}

export class FinishSignupModel {
  birthDate: Date;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}
