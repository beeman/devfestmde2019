import {
  Resolver,
  Mutation,
  Args,
  ResolveProperty,
  Parent
} from '@nestjs/graphql';

import { Auth } from '../models/auth';

import { LoginInput } from '../dto/login.input';
import { RegisterInput } from '../dto/register.input';
import { AuthService } from '../services/auth.service';

@Resolver(of => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(returns => Auth)
  async register(@Args('data') data: RegisterInput) {
    const token = await this.auth.register(data);
    return {
      token
    };
  }

  @Mutation(returns => Auth)
  async login(@Args('data') { email, password }: LoginInput) {
    const token = await this.auth.login(email.toLowerCase(), password);
    return {
      token
    };
  }

  @ResolveProperty('user')
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.token);
  }
}
