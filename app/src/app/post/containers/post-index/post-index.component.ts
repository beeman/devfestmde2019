import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Post, User } from 'src/sdk';
import { WebAuthService } from 'src/app/auth';

import { PostService } from '../../services/post.service';
import { PostActions } from '../../actions/post.actions';

@Component({
  template: `
    <div class="container pt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div class="mb-3">
            <app-post-form [refresh$]="refresh$" (action)="handleAction($event)" [author]="author$ | async"></app-post-form>
          </div>
          <ng-container *ngIf="feed$ | async as feed; else loading">
            <div class="mb-3" *ngFor="let post of feed">
              <app-post [post]="post" (action)="handleAction($event)"></app-post>
            </div>
          </ng-container>
          <ng-template #loading>
            <app-loading [loading]="true"></app-loading>
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class PostIndexComponent implements OnInit {
  public author$: Observable<User>;
  public feed$: Observable<Post[]>;

  public _refresh = new BehaviorSubject(true);
  public refresh$ = this._refresh.asObservable();

  constructor(
    public auth: WebAuthService,
    public service: PostService,
  ) {
    this.author$ = this.auth.user$;
  }

  private refresh() {
    this._refresh.next(true);
  }

  ngOnInit() {
    this.feed$ = combineLatest(this.refresh$).pipe(
      tap(() => console.log('before retrieve posts')),
      switchMap(() => this.service.posts()),
      tap(() => console.log('after retrieve posts')),
    );
  }

  handleAction({ type, payload }: { type: string; payload?: any }) {
    switch (type) {
      case PostActions.SUBMIT_POST:
        return this.service
          .createPost(payload)
          .subscribe(() => this.refresh(), err => console.log('Something went wrong!', err));
      case PostActions.SHOW_COMMENTS:
        const handler = data => this.service.createComment(payload.id, data);
        return this.service.openComments({ title: 'HE', handler, post: payload });
      default:
        console.log('Unhandled action', { type, payload });
        return { type, payload };
    }
  }
}
