import { Injectable } from '@angular/core';
import { CardPostModel } from '../common/card-post/card-post.model';
import {
  defaultImage2,
  defaultImage3,
  defaultImage4,
  defaultImage5
} from '../common/image-wrapper/default-image.const';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {

  cards: CardPostModel[] = [
    {
      description: 'This bench is broken for 3 years. People would use it if it had a better condition.',
      downVote: 5,
      upVote: 104,
      place: 'London, Gore Street 5',
      tags: ['bench'],
      urls: [defaultImage4, defaultImage5]
    },
    {
      description: 'I ride every day on this road and this pothole is always in my way, damaging my car. Please upvote it!',
      downVote: 31,
      upVote: 33,
      place: 'London, Alleyn Park 2',
      tags: ['pothole'],
      urls: [defaultImage2]
    },
    {
      description: 'The whole bench should be removed and they should put another one instead.',
      downVote: 12,
      upVote: 298,
      place: 'London, Ditton Road 1',
      tags: ['bench'],
      urls: [defaultImage3]
    }
  ];

  constructor() {

  }

  getCards(): Observable<CardPostModel[]> {
    return of([...this.cards]);
  }

}
