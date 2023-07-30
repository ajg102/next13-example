import { Knex } from "knex";

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    database: "test",
    host: "test.cb0ptwfks8sw.us-east-1.rds.amazonaws.com",
    password: "G5fK$7I86$BR",
    user: "postgres",
    ssl: { rejectUnauthorized: false },
  },
};

export default knexConfig;
