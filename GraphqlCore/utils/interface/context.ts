import { Context } from '@azure/functions';
import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';

export interface AppContext {
  em: EntityManager<IDatabaseDriver<Connection>>;
  azureContext: Context;
}
