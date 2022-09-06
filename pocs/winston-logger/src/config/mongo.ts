export const MONGO_HOST = process.env.MONGO_HOST || 'localhost';

export const MONGO_PORT = process.env.MONGO_PORT
  ? Number.parseInt(process.env.MONGO_PORT)
  : 27017;

export const MONGO_DB = process.env.MONGO_DB || 'winston';

export const MONGO_COLLECTION = process.env.MONGO_COLLECTION || 'logs';

export const MONGO_URI = process.env.MONGO_URI
  ? process.env.MONGO_URI
  : `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
