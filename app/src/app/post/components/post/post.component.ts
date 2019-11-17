import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from 'src/sdk';
import { PostActions } from '../../actions/post.actions';

@Component({
  selector: 'app-post',
  template: `
    <div class="card">
      <div class="card-body">
        <app-post-author
          [author]="post.author"
          [text]="post.text"
          [title]="post.createdAt | timeago: 'live'">
        </app-post-author>
      </div>
      <div class="card-footer p-1" *ngIf="showButtons">
        <app-post-buttons [buttons]="buttons" (action)="handleClick($event)"></app-post-buttons>
      </div>
    </div>
  `,
  styles: [
    `
      .card-footer {
          background-color: inherit;
      }
    `
  ]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() showButtons = true;
  @Output() action = new EventEmitter();

  buttons = [];
  constructor() {}

  ngOnInit() {
    this.buttons = [
      {
        count: this.post.commentCount,
        action: PostActions.SHOW_COMMENTS,
        icon: 'fa fa-comment',
      },
    ];
  }

  handleClick(type) {
    this.action.emit({ type, payload: this.post });
  }
}
