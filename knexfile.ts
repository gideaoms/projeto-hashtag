import path from 'path';

export default {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 3006,
    database: 'postgres',
    user: 'postgres',
    password: '123456',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
    directory: path.resolve('src', 'database', 'migrations'),
  },
};
