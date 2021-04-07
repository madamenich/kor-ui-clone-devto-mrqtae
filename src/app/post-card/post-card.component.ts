import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: [ './post-card.component.scss' ]
})
export class PostCardComponent  {
  @Input() post;
  @Input() highlight: boolean;

  constructor() {
  }
}
