import { CreatePostModel } from './create-post.model';

export class UpdatePostModel extends CreatePostModel {
  upVote: number;
  downVote: number;
  id: string;
}
