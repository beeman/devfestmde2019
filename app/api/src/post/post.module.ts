import { Module } from '@nestjs/common';

import { CoreModule } from '../core';
import { PrismaModule } from '../prisma';

import { CommentResolver } from './resolvers/comment.resolver';
import { CommentService } from './services/comment.service';
import { PostResolver } from './resolvers/post.resolver';
import { PostService } from './services/post.service';
import { ProfileResolver } from './resolvers/profile.resolver';
import { ProfileService } from './services/profile.service';

@Module({
  imports: [PrismaModule, CoreModule],
  providers: [
    CommentResolver,
    CommentService,
    PostResolver,
    PostService,
    ProfileResolver,
    ProfileService,
  ],
})
export class PostModule {}
