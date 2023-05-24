import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable(ETableNames.city, table => {
    table.bigIncrements("id").primary().index();
    table.string("name", 80).index().notNullable();
  }).then(() => {
    console.log(`Create table  ${ETableNames.city}`);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ETableNames.city).then(() => console.log(`Drop table  ${ETableNames.city}`));
}

