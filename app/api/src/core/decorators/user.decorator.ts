import { createParamDecorator } from '@nestjs/common';
import { User } from '../../user/models/user';

export const UserEntity = createParamDecorator(
  (data, [root, args, ctx, info]) => getUser(ctx)
);

export function getUser(ctx): User {
  return ctx.req.user;
}
