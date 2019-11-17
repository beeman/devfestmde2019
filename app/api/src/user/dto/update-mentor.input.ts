import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateMentorInput {
  @Field({ nullable: true })
  enabled?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field(type => [String], { nullable: true })
  topics?: string[];

  @Field(type => [String], { nullable: true })
  types?: string[];

  @Field(type => [String], { nullable: true })
  days?: string[];

  @Field({ nullable: true })
  hours?: number;
}
