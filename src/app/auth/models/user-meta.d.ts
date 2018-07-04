import { GraduationEnum } from './graduation.enum';
import { LatLngLiteral } from '@agm/core';

export class UserMetaModel {
  firstName: string;
  lastName: string;
  birthDate: Date;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}

export class FinishUserMetaModel {
  birthDate: Date;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}

export class StartUserMetaModel {
  firstName: string;
  lastName: string;
}

export class SendUserMetaModel {
  firstName: string;
  lastName: string;
  birthDate: number;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}

export class SendFinishUserMetaModel {
  birthDate: number;
  graduation: GraduationEnum;
  location: LatLngLiteral;
}
