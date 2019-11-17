import { Injectable } from '@angular/core';
import { Comment, GraphQLService, Post } from 'src/sdk';
import { map } from 'rxjs/operators';
import { BsModalService } from 'ngx-bootstrap';
import { Observable } from 'rxjs';

import { WebAuthService } from 'src/app/auth';

import { PostCommentsComponent } from '../components/post-comments/post-comments.component';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private auth: WebAuthService, private graphql: GraphQLService, private modalService: BsModalService) {}

  posts() {
    return this.graphql.posts().pipe(map(result => result.data.posts as Post[]));
  }

  post(id: string) {
    return this.graphql.post(id).pipe(map(result => result.data.post as Post));
  }

  comments(postId: string) {
    return this.graphql.comments(postId).pipe(map(result => result.data.comments as Comment[]));
  }

  createPost(payload: any) {
    return this.graphql.createPost(payload);
  }

  createComment(postId, { text}) {
    return this.graphql.createComment(postId, { text });
  }

  openComments({
    title,
    handler,
    post,
    comments,
  }: {
    handler?: (data) => Observable<any>;
    title?: string;
    post?: Post;
    comments?: Comment[];
  }) {
    const fetcher = id => this.comments(id);
    this.modalService.show(PostCommentsComponent, {
      initialState: {
        title,
        handler,
        fetcher,
        author$: this.auth.user$,
        post,
        // comments: ,
      },
    });
  }
}
