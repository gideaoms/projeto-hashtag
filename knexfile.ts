import path from 'path';

const resolve = (directory: string) => path.resolve(__dirname, 'src', 'database', directory);

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
    directory: resolve('migrations'),
  },
  seeds: {
    tableName: 'knex_seeds',
    extension: 'ts',
    directory: resolve('seeds'),
  },
};
