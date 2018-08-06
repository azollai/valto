import { Component, Input } from '@angular/core';
import { CardPostModel } from './card-post.model';
import { defaultImage } from '../common/image-wrapper/default-image.const';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Input() card: CardPostModel = {
    description: 'It is a long established fact that a reader will be distracted by the readable content of a' +
    ' page when looking at its layout.',
    downVote: 5,
    upVote: 104,
    place: 'London, Gore Street 5',
    tags: ['pothole'],
    urls: [defaultImage]
  };

  constructor() { }

  onUpVote() {
    // NGXS upvote
  }

  onDownVote() {
    // NGXS downvote
  }
}
