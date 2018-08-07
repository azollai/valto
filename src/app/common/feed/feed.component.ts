import { Component, Input } from '@angular/core';
import { FeedService } from './feed.service';
import { CardPostModel } from '../card-post/card-post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  public chips = [];

  @Input() title: string = 'News feed';
  cards: CardPostModel[] = [];

  constructor(private feedService: FeedService) {
    this.getCards();
  }

  onScroll() {
    this.getCards();
  }

  private getCards() {
    this.feedService.getCards().subscribe(cards => {
      this.cards = this.cards.concat(cards);
    });
  }
}
