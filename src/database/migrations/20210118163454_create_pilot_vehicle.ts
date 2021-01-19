import * as Knex from 'knex';

const TABLE_NAME = 'pilot_vehicle';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('id_vehicle').references('id').inTable('vehicles').onUpdate('cascade');
    table.uuid('id_pilot').references('id').inTable('pilots').onUpdate('cascade');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
