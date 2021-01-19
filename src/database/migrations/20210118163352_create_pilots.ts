import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pilots', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('mass').notNullable();
    table.integer('height').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pilots');
}
