import { Field, ArgsType } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class IdArgs {
  @Field(type => String)
  @IsNotEmpty()
  id: string;
}
