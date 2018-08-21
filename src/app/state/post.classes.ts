import {
  CREATE_POST,
  DISLIKE_POST,
  FETCH_POSTS,
  FETCH_TAGS,
  LIKE_POST,
  START_LOADING,
  STOP_LOADING,
  UNDISLIKE_POST,
  UNLIKE_POST,
  UPDATE_POST
} from './post.consts';
import { CreatePostModel } from '../models/create-post.model';
import { UpdatePostModel } from '../models/update-post.model';

export class StartLoading {
  static readonly type = START_LOADING;
}

export class StopLoading {
  static readonly type = STOP_LOADING;
}

export class FetchPosts {
  static readonly type = FETCH_POSTS;
}

export class CreatePost {
  static readonly type = CREATE_POST;

  constructor(public payload: CreatePostModel) { }
}

export class UpdatePost {
  static readonly type = UPDATE_POST;

  constructor(public payload: UpdatePostModel) { }
}

export class LikePost {
  static readonly type = LIKE_POST;
}

export class UnlikePost {
  static readonly type = UNLIKE_POST;
}

export class DislikePost {
  static readonly type = DISLIKE_POST;
}

export class UndislikePost {
  static readonly type = UNDISLIKE_POST;
}

export class FetchTags {
  static readonly type = FETCH_TAGS;
}


