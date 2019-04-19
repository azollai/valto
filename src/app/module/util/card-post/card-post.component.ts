import { Component, Input } from '@angular/core';
import { CardPostModel } from './card-post.model';
import { defaultImage } from '../image-wrapper/default-image.constant';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() card: CardPostModel = {
    id: 'id',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a' +
    ' page when looking at its layout.',
    downVote: 5,
    upVote: 104,
    place: { lat: 12, lng: 12 },
    tags: ['pothole'],
    urls: [defaultImage]
  };

  constructor() { }

  onVote(up: boolean) {
    up ? this.card.upVote++ : this.card.downVote++;
  }
}
