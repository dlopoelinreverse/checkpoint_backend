import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "./entities/country";

const db = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [Country],
  synchronize: true,
  logging: true,
});

export default db;
