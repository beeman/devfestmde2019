import { Field, ObjectType } from 'type-graphql';
import { Post } from './post';
import { Profile } from './profile';

@ObjectType()
export class Comment {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  text: string;

  @Field(type => Profile)
  author: Profile;

  @Field(type => Post)
  post: Post;
}
