import { Injectable } from '@nestjs/common';

import { getGravatarUrl, PasswordService } from '../../core';
import { PrismaService } from '../../prisma';

import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
export class UserService {

  constructor(
    private password: PasswordService,
    private prisma: PrismaService,
  ) {}

  async createUser(data: CreateUserInput) {
    const hashedPassword = await this.password.hashPassword(data.password);

    // TODO: Should not use `any` but there is a mismatch between Prisma's and our local User model
    const user: any = await this.prisma.client.createUser({
      username: data.username,
      name: data.name || data.username,
      email: data.email.toLowerCase(),
      avatar: data.avatar || getGravatarUrl(data.email.toLowerCase()),
      password: hashedPassword,
    });

    return user;
  }
}
