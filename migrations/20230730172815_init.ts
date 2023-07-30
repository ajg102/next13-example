import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("item", (table) => {
    table.uuid("id").primary();
    table.string("itemName").notNullable();
    table.string("itemImageUrl").nullable();
  });
  return knex.schema.createTable("likes", (table) => {
    table.uuid("itemId").references("id").inTable("item").onDelete("CASCADE");
    table.integer("itemLikes").notNullable().defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("likes");
  return knex.schema.dropTable("item");
}
