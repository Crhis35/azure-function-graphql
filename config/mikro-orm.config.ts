import { Options } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import { User } from '../entities';

const ormConfig: Options = {
  type: 'mongo',
  entities: [User],
  dbName: 'delyfoodapp',
  highlighter: new MongoHighlighter(),
  debug: true,
  clientUrl:
    'mongodb://delyfoodapp-cosmosdb-mongo:IjsNf8l1Dfz9P7eXY510BoJmnVMdf2LaCkJam80PFGsfBtbotLgcBnTtj74zK6gnwRsYlEIbAFuBbBnl1BsChg%3D%3D@delyfoodapp-cosmosdb-mongo.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@delyfoodapp-cosmosdb-mongo@',
};

export default ormConfig;
