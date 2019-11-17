import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma';
import { User } from '../../user';
import { CreateCommentInput } from '../dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  comments(postId) {
    return this.prisma.client.comments({
      where: { post: { id: postId } },
      orderBy: 'createdAt_ASC',
      first: 100,
    });
  }

  comment({ id }) {
    return this.prisma.client.comment({ id });
  }

  async createComment(user: User, { postId, text }: CreateCommentInput) {
    const comment = await this.prisma.client.createComment({
      author: { connect: { id: user.id } },
      post: { connect: { id: postId } },
      text,
    });
    const post = await this.prisma.client.post({ id: postId });
    await this.prisma.client.updatePost({ where: { id: postId }, data: { commentCount: post.commentCount + 1 }});
    return comment;
  }

  async deleteComment(user: User, id: string) {
    const author = await this.prisma.client.comment({ id }).author();
    if (author.id !== user.id) {
      throw new Error('You can only delete your own comments.');
    }
    return this.prisma.client.deleteComment({ id });
  }

  commentAuthor(id: string) {
    return this.prisma.client.comment({ id }).author();
  }

  commentPost(id: string) {
    return this.prisma.client.comment({ id }).post();
  }
}
