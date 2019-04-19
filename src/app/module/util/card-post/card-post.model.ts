import { LatLngLiteral } from '@agm/core';

export class CardPostModel {
  id: string;
  upVote: number;
  downVote: number;
  place: LatLngLiteral;
  tags: string[];
  urls: string[];
  description: string;
}
