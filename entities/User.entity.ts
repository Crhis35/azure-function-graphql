import { Entity, Property } from '@mikro-orm/core';
import { IsEmail } from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';

import { BaseEntity } from './Base.entity';
export class CreateUserInput {
  @Field()
  name!: string;

  @Field()
  @IsEmail()
  email!: string;
}

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Property()
  @Field()
  name!: string;

  @Property({ unique: true })
  @Field()
  @IsEmail()
  email!: string;
}
