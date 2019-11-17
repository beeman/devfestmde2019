import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard, UserEntity } from '../../core';

import { CreatePostInput } from '../dto';

import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { User } from '../../user';

@Resolver(of => Post)
export class PostResolver {
  constructor(private service: PostService) {}

  @Query(returns => [Post])
  posts() {
    return this.service.posts();
  }

  @Query(returns => [Post])
  userPosts(@Args('userId') userId: string) {
    return this.service.userPosts(userId);
  }

  @Query(returns => Post)
  post(@UserEntity() user: User, @Args('id') id: string) {
    return this.service.post({ id });
  }

  @Mutation(returns => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @UserEntity() user: User,
    @Args('data') data: CreatePostInput,
  ) {
    return this.service.createPost(user, data);
  }

  @Mutation(returns => Post)
  @UseGuards(GqlAuthGuard)
  async deletePost(
    @UserEntity() user: User,
    @Args('id') id: string,
  ): Promise<any> {
    return this.service.deletePost(user, id);
  }

  @ResolveProperty('author', type => User)
  author(@Parent() post: Post) {
    return this.service.postAuthor(post.id);
  }

  @ResolveProperty('comments', type => [Comment])
  comments(@Parent() post: Post) {
    return this.service.postComments(post.id);
  }

}
