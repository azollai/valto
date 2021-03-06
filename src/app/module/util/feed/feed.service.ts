import { Injectable } from '@angular/core';
import { CardPostModel } from '../card-post/card-post.model';
import { defaultImage2, defaultImage3, defaultImage4, defaultImage5 } from '../image-wrapper/default-image.constant';
import { CreatePostModel } from '../../../model/create-post.model';
import { UpdatePostModel } from '../../../model/update-post.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeedService {

  cards: CardPostModel[] = [
    {
      id: 'elso',
      description: 'This bench is broken for 3 years. People would use it if it had a better condition.',
      downVote: 5,
      upVote: 104,
      place: { lat: 12, lng: 12 },
      tags: ['bench'],
      urls: [defaultImage4, defaultImage5]
    },
    {
      id: 'masodik',
      description: 'I ride every day on this road and this pothole is always in my way, damaging my car. Please upvote it!',
      downVote: 31,
      upVote: 33,
      place: { lat: 12, lng: 12 },
      tags: ['pothole'],
      urls: [defaultImage2]
    },
    {
      id: 'harmadik',
      description: 'The whole bench should be removed and they should put another one instead.',
      downVote: 12,
      upVote: 298,
      place: { lat: 12, lng: 12 },
      tags: ['bench'],
      urls: [defaultImage3]
    }
  ];

  constructor() {}

  getCards(): Observable<CardPostModel[]> {
    return of([...this.cards]);
  }

  addCard(card: CreatePostModel): Observable<void> {
    this.cards.push({
      upVote: 0,
      tags: card.tags,
      description: card.description,
      place: card.place,
      downVote: 0,
      urls: card.urls,
      id: 'uj'
    });
    return of();
  }

  updateCard(card: UpdatePostModel): Observable<void> {
    this.cards.forEach(c => {
      if (c.id === card.id) {
        c = {
          upVote: card.upVote,
          tags: card.tags,
          description: card.description,
          place: card.place,
          downVote: card.downVote,
          urls: card.urls,
          id: card.id
        };
      }
    });
    return of();
  }

}
