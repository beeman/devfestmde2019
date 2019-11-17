import { Field, ObjectType } from 'type-graphql';
import { Role } from './role';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  email: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  avatar?: string;

  // @Field({ nullable: true })
  // location?: string;

  @Field(type => Role)
  role: Role;

  password?: string;
}
