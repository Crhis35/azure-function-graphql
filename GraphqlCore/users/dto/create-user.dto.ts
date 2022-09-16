import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name!: string;

  @Field()
  @IsEmail()
  email!: string;
}
