import knex, { Knex } from "knex";
import knexConfig from "../knexfile";

let instance: Knex | undefined = undefined;

const getInstance = () => {
  if (instance) return instance;

  const newInstance = knex(knexConfig);

  instance = newInstance;

  return instance;
};

export default getInstance;
