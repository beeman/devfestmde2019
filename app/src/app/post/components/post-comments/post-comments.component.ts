import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Comment, Post, User } from 'src/sdk';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-comments',
  template: `
    <div>
      <app-post [showButtons]="false" [post]="post"></app-post>
      <div class="card">
        <div class="card-body">
          <ng-container *ngIf="comments.length">
            <ng-container *ngFor="let comment of comments">
              <div class="mb-3">
                <app-post-author
                  [author]="comment.author"
                  [text]="comment.text"
                  [title]="comment.createdAt | timeago: 'live'"
                >
                </app-post-author>
              </div>
            </ng-container>
          </ng-container>
          <app-loading [loading]="loading && (!comments || !comments.length)"></app-loading>
          <div *ngIf="!loading && !comments.length">
            <div class="text-center py-5">Nobody commented yet...</div>
          </div>
        </div>
      </div>
    </div>
    <app-post-form [refresh$]="refresh$" (action)="handleAction($event)" [author]="author$ | async"></app-post-form>
  `,
  styles: [
    `
      .card-footer {
        background-color: inherit;
      }
      .avatar {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        border: 1px solid #2b3e50;
      }
    `,
  ],
})
export class PostCommentsComponent implements OnInit {
  public author$: Observable<User>;
  public post: Post;
  public comments: Comment[] = [];
  @Output() action = new EventEmitter();
  loading = true;
  handler: (id) => Observable<any>;
  fetcher: (id) => Observable<any>;
  public _refresh = new BehaviorSubject(true);
  public refresh$ = this._refresh.asObservable();

  ngOnInit() {
    combineLatest(this.refresh$)
      .pipe(
        tap(() => this.loading = true),
        switchMap(() => this.fetcher(this.post.id)),
      )
      .subscribe(comments => {
        this.loading = false;
        this.comments = comments;
      });
  }

  refresh() {
    this._refresh.next(true);
  }

  handleAction({ payload: { text } }) {
    this.handler({ text }).subscribe(() => {
      this.refresh();
      this.action.emit({ type: 'REFRESH' });
    });
    console.log(text);
  }
}
