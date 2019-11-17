import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { UpdateUserInput } from './update-user.input';

@InputType()
export class CreateUserInput extends UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
