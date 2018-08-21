import { Component, Input } from '@angular/core';
import { CardPostModel } from '../card-post/card-post.model';
import { Select, Store } from '@ngxs/store';
import { PostState } from '../../state/post.state';
import { Observable } from 'rxjs/Observable';
import * as postActions from '../../state/post.classes';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  public chips = [];

  @Select(PostState.posts) posts$: Observable<CardPostModel>;
  @Input() title = 'News feed';

  constructor(private store: Store) {
    this.getCards();
  }

  onScroll() {
    this.getCards();
  }

  private getCards() {
    this.store.dispatch(new postActions.FetchPosts());
  }
}
