import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard, UserEntity } from '../../core';
import { User } from '../../user';

import { CreateCommentInput } from '../dto';

import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';

@Resolver(of => Comment)
export class CommentResolver {
  constructor(private service: CommentService) {}

  @Query(returns => [Comment])
  comments(@Args('postId') postId: string) {
    return this.service.comments(postId);
  }

  @Mutation(returns => Comment)
  @UseGuards(GqlAuthGuard)
  async createComment(
    @UserEntity() user: User,
    @Args('data') data: CreateCommentInput,
  ) {
    return this.service.createComment(user, data);
  }

  @Mutation(returns => Comment)
  @UseGuards(GqlAuthGuard)
  async deleteComment(
    @UserEntity() user: User,
    @Args('id') id: string,
  ): Promise<any> {
    return this.service.deleteComment(user, id);
  }

  @ResolveProperty('author', type => User)
  author(@Parent() comment: Comment) {
    return this.service.commentAuthor(comment.id);
  }

  @ResolveProperty('post', type => [Comment])
  post(@Parent() comment: Comment) {
    return this.service.commentPost(comment.id);
  }
}
