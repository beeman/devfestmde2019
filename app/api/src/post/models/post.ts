import { Field, ObjectType } from 'type-graphql';
import { Profile } from './profile';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  text: string;

  @Field(type => Profile)
  author: Profile;

  @Field()
  commentCount: number;

  @Field(type => [Profile], { nullable: true })
  commentedBy: Profile[];
}
