import knex from 'knex';

const database = knex({
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    port: 3006,
    user: 'postgres',
    password: '123456',
    database: 'postgres',
  },
});

export default database;
