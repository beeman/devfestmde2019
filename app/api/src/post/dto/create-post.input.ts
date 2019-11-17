import { IsNotEmpty, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreatePostInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  text: string;
}
