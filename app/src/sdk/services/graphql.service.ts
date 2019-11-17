import { Injectable } from '@angular/core';
import {
  CommentsGQL,
  CreateCommentGQL,
  CreatePostGQL,
  LoginGQL,
  LoginInput,
  MeGQL,
  PostGQL,
  PostsGQL,
  ProfileGQL,
  ProfilesGQL,
  RegisterGQL,
  RegisterInput,
} from '../generated/graphql';

@Injectable({ providedIn: 'root' })
export class GraphQLService {

  constructor(
    private commentsGQL: CommentsGQL,
    private createCommentGQL: CreateCommentGQL,
    private createPostGQL: CreatePostGQL,
    private loginGQL: LoginGQL,
    private meGQL: MeGQL,
    private postGQL: PostGQL,
    private postsGQL: PostsGQL,
    private profileGQL: ProfileGQL,
    private profilesGQL: ProfilesGQL,
    private registerGQL: RegisterGQL
  ) {}

  login({ email, password }: LoginInput) {
    return this.loginGQL.mutate({ data: { email, password }});
  }

  me() {
    return this.meGQL.fetch();
  }

  register({ email, name, password, username }: RegisterInput) {
    return this.registerGQL.mutate({ data: { email, name, password, username }});
  }

  posts() {
    return this.postsGQL.fetch();
  }

  post(id: string) {
    return this.postGQL.fetch({ id });
  }

  comments(postId: string) {
    return this.commentsGQL.fetch({ postId });
  }

  createPost({ text }) {
    return this.createPostGQL.mutate({ data: { text }});
  }

  createComment(postId: string, { text }) {
    return this.createCommentGQL.mutate({ data: { postId, text }});
  }

  profiles() {
    return this.profilesGQL.fetch();
  }

  profile(username: string) {
    return this.profileGQL.fetch({ username });
  }

}
