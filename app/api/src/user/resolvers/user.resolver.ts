import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import {
  GqlAuthGuard,
  PaginationArgs,
  PasswordService,
  UserEntity,
} from '../../core';
import { PrismaService } from '../../prisma';

import {
  CreateUserInput,
  UpdateUserInput,
  UpdateUserPasswordInput,
} from '../dto';

import { User } from '../models/user';
import { Role } from '../models/role';
import { UserService } from '../services/user.service';

const checkIsUserAdmin = (user: User) => {
  if (user.role !== Role.ADMIN) {
    throw new Error('You must be admin to execute this operation!');
  }
};

@Resolver(of => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private passwordService: PasswordService,
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  @Query(returns => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Query(returns => [User])
  users(
    @UserEntity() user: User,
    @Args() { skip, after, before, first, last }: PaginationArgs,
  ) {
    checkIsUserAdmin(user);
    return this.prisma.client.users({ skip, after, before, first, last });
  }

  @Query(returns => User)
  user(@UserEntity() user: User, @Args('id') id: string) {
    checkIsUserAdmin(user);
    return this.prisma.client.user({ id });
  }

  @Mutation(returns => User)
  async createUser(
    @UserEntity() user: User,
    @Args('data') data: CreateUserInput,
  ) {
    checkIsUserAdmin(user);
    return this.userService.createUser(data);
  }

  @Mutation(returns => User)
  updateUser(
    @UserEntity() user: User,
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ) {
    checkIsUserAdmin(user);
    return this.prisma.client.updateUser({
      where: { id },
      data: { ...data },
    });
  }

  @Mutation(returns => User)
  async updateUserPassword(
    @UserEntity() user: User,
    @Args('id') id: string,
    @Args('data') { password }: UpdateUserPasswordInput,
  ) {
    checkIsUserAdmin(user);
    const hashedPassword = await this.passwordService.hashPassword(password);
    return this.prisma.client.updateUser({
      where: { id },
      data: { password: hashedPassword },
    });
  }

  @Mutation(returns => Boolean)
  async deleteUser(
    @UserEntity() user: User,
    @Args('id') id: string,
  ): Promise<boolean> {
    checkIsUserAdmin(user);
    await this.prisma.client.deleteUser({ id });
    return true;
  }
}
