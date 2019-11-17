import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma';
import { User } from '../../user';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  posts() {
    return this.prisma.client.posts({ orderBy: 'createdAt_DESC', first: 25 });
  }

  userPosts(userId: string) {
    return this.prisma.client.posts({ where: { author: { id: userId }}, orderBy: 'createdAt_DESC', first: 25 });
  }

  post({ id }) {
    return this.prisma.client.post({ id });
  }

  createPost(user: User, data) {
    return this.prisma.client.createPost({
      author: { connect: { id: user.id } },
      ...data,
    });
  }

  async deletePost(user: User, id: string) {
    const author = await this.prisma.client.post({ id }).author();
    if (author.id !== user.id) {
      throw new Error('You can only delete your own posts.');
    }
    return this.prisma.client.deletePost({ id });
  }

  postAuthor(id: string) {
    return this.prisma.client.post({ id }).author();
  }

  postComments(id: string) {
    return this.prisma.client.post({ id }).comments();
  }
}
