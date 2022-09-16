// import dotenv from "dotenv";
// dotenv.config(); // load env vars before anything else

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-azure-functions';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UserResolver } from './users';
import { MikroORM } from '@mikro-orm/core';
import ormConfig from '../config/mikro-orm.config';
import { AppContext } from './utils/interface/context';

const server = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [UserResolver],
  }),
  context: async ({ context }): Promise<AppContext> => {
    const orm = await MikroORM.init(ormConfig);
    return {
      azureContext: context,
      em: orm.em.fork(),
    };
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

export default server.createHandler();
