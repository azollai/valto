import { LatLngLiteral } from '@agm/core';

export class CreatePostModel {
  place: LatLngLiteral;
  tags: string[];
  urls: string[];
  description: string;
}
