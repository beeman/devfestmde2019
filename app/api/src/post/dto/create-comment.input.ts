import { IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  postId: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  text: string;
}
