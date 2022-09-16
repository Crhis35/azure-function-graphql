import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../entities';
import { AppContext } from '../utils/interface/context';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver(() => User)
export class UserResolver {
  @Query(() => String)
  async getStore() {
    return 'Hello World';
  }
  @Mutation(() => String)
  async createUser(
    @Ctx() { em }: AppContext,
    @Arg('input') createUserInput: CreateUserInput
  ) {
    try {
      const newUser = new User(createUserInput);
      const user = em.getRepository(User).create(newUser);
      await em.persist([user]).flush();
      return 'Create User';
    } catch (error) {
      console.error(error);
      return 'Not Create User';
    }
  }
}
