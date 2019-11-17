import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService, User } from '../../prisma';
import { PasswordService } from '../../core';
import { UserService } from '../../user/services/user.service';

import { RegisterInput } from '../dto/register.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly userService: UserService,
  ) {}

  async register(payload: RegisterInput): Promise<string> {
    const user = await this.userService.createUser(payload);

    return this.jwtService.sign({ userId: user.id });
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.prisma.client.user({ email });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const passwordValid = await this.passwordService.validatePassword(password, user.password);

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    return this.jwtService.sign({ userId: user.id });
  }

  validateUser(userId: string): Promise<User> {
    return this.prisma.client.user({ id: userId });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.client.user({ id });
  }
}
