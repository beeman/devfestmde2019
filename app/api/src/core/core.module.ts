import { Module } from '@nestjs/common';

import { CoreController } from './controllers/core.controller';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { DateScalar } from './scalars/date.scalar';
import { CoreResolver } from './resolvers/core.resolver';
import { CoreService } from './services/core.service';
import { PasswordService } from './services/password.service';
import { PrismaModule } from '../prisma';

const PROVIDERS = [CoreService, GqlAuthGuard, PasswordService];

@Module({
  imports: [PrismaModule],
  controllers: [CoreController],
  providers: [...PROVIDERS, DateScalar, CoreResolver],
  exports: [...PROVIDERS],
})
export class CoreModule {}
