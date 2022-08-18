import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.17.0.2',
  port: 5432,
  username: 'postgres',
  password: 'devpassword',
  database: 'bootcamp',
  entities: ['src/modules/**/infrastructure/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
});

export default AppDataSource;
