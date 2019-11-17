import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';

import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';
import { Comment } from '../models/comment';
import { Post } from '..';

@Resolver(of => Profile)
export class ProfileResolver {
  constructor(private service: ProfileService) {}

  @Query(returns => [Profile])
  profiles() {
    return this.service.profiles();
  }

  @Query(returns => Profile)
  profile(@Args('username') username: string) {
    return this.service.profile({ username });
  }

  @ResolveProperty('posts', type => [Post])
  posts(@Parent() { id }: Profile) {
    return this.service.profilePosts({ id });
  }
}

