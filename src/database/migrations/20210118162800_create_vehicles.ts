import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('manufacturer').notNullable();
    table.integer('passengers').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('vehicles');
}
