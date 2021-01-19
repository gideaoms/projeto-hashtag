import knex from 'knex';
import { DB_CLIENT, DB_HOST, DB_NAME, DB_PASS, DB_USER } from '../config/db-connection';

const dbConnection = knex({
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
  },
});

export default dbConnection;
