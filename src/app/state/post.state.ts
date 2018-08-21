import { CardPostModel } from '../common/card-post/card-post.model';
import { TagModel } from '../models/tag.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { CreatePost, FetchPosts, StartLoading, StopLoading, UpdatePost } from './post.classes';
import { FeedService } from '../common/feed/feed.service';

export interface PostStateModel {
  isLoading: boolean;
  posts: CardPostModel[];
  currentPost: CardPostModel;
  tags: TagModel[];
}

@State<PostStateModel>({
  name: 'post',
  defaults: {
    isLoading: false,
    currentPost: undefined,
    posts: [],
    tags: []
  }
})
export class PostState {

  constructor(private router: Router,
              private store: Store,
              private db: AngularFirestore,
              private feedService: FeedService) { }

  @Selector()
  static isLoading(state: PostStateModel) {
    return state.isLoading;
  }

  @Selector()
  static posts(state: PostStateModel) {
    return state.posts;
  }

  @Action(FetchPosts)
  fetchPosts({ getState, patchState }: StateContext<PostStateModel>) {
    debugger;
    const state = getState();
    this.feedService.getCards().subscribe(posts => {
      patchState({
        posts: [...state.posts.concat(posts)]
      });
    });
  }

  @Action(CreatePost)
  createPost({ dispatch, patchState }: StateContext<PostStateModel>, { payload }: CreatePost) {
    dispatch(new StartLoading());
    debugger;
    this.feedService.addCard(payload).subscribe(
      undefined,
      error => {
        console.error(error);
        dispatch(new StopLoading());
      }, () => {
        debugger;
        dispatch(new StopLoading());
        this.router.navigate(['news-feed']);
      }
    );
  }

  @Action(UpdatePost)
  updatePost({ dispatch, patchState }: StateContext<PostStateModel>, { payload }: UpdatePost) {
    dispatch(new StartLoading());
    this.feedService.updateCard(payload).subscribe(
      () => dispatch([new StopLoading(), new FetchPosts()]),
      error => {
        console.error(error);
        dispatch([new StopLoading(), new FetchPosts()]);
      }
    );
  }
}
