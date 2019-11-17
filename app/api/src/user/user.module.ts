import { Module } from '@nestjs/common';

import { CoreModule } from '../core';

import { PrismaModule } from '../prisma';

import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [PrismaModule, CoreModule],
  providers: [UserResolver, UserService],
  exports: [UserService]
})
export class UserModule {}
