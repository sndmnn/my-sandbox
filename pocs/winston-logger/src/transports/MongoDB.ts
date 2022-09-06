import 'winston-mongodb';
import { transports } from 'winston';
import { MONGO_URI } from '../config/mongo';
import { MONGO_COLLECTION } from '../config/mongo';

const mongoDbTransport = new transports.MongoDB({
  name: 'mongo-transport',
  db: MONGO_URI,
  collection: MONGO_COLLECTION,
  tryReconnect: true,
  decolorize: true,
  options: {
    useUnifiedTopology: true,
  },
});

export default mongoDbTransport;
