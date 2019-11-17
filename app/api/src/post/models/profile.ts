import { Field, ObjectType } from 'type-graphql';
import { Post } from './post';

@ObjectType()
export class Profile {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  location?: string;

  @Field(type => [Post], { nullable: true })
  posts?: Post[];
}
