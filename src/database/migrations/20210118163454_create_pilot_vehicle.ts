import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pilot_vehicle', (table) => {
    table.increments('id').primary()
    table.integer('id_vehicle').references('id').inTable('vehicles').onUpdate('cascade')
    table.integer('id_pilot').references('id').inTable('pilots').onUpdate('cascade')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pilots')
}

