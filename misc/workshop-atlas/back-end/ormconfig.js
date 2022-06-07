const DATABASE_URL = `postgres://postgres:${process.env.PSQL_PASSWORD}@${
  process.env.PSQL_HOST
}:${Number(process.env.PSQL_PORT)}/${process.env.PSQL_DB}`;

module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL || DATABASE_URL,
  logging: false,
  entities: ['src/modules/**/infrastructure/typeorm/entities/*.ts'],
  migrations: ['src/shared/infrastructure/lib/typeorm/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/shared/infrastructure/typeorm/entities',
    migrationsDir: 'src/shared/infrastructure/lib/typeorm/migrations',
  },
};
