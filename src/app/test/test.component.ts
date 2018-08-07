import { Component, Input } from '@angular/core';
import { CardPostModel } from '../common/card-post/card-post.model';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
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
