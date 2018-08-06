import { Component, Input } from '@angular/core';
import { CardPostModel } from './card-post.model';
import { defaultImage } from '../image-wrapper/default-image.const';

@Component({
  selector: 'app-test',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() card: CardPostModel = {
    description: 'It is a long established fact that a reader will be distracted by the readable content of a' +
    ' page when looking at its layout.',
    downVote: 5,
    upVote: 104,
    place: 'Rákospalota, Kolozsvár utca',
    tags: ['kátyu'],
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