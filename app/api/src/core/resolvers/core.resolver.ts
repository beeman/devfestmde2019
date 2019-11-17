import { Resolver, Query, Args } from '@nestjs/graphql';
import { Float } from 'type-graphql';
import { CoreService } from '../services/core.service';

@Resolver()
export class CoreResolver {
  constructor(private service: CoreService) {}

  @Query(returns => String)
  hello(@Args('name') name: string): string {
    return this.service.hello(name);
  }

  @Query(returns => Float)
  uptime(): number {
    return this.service.uptime();
  }
}
