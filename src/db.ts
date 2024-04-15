import "reflect-metadata";
import { DataSource } from "typeorm";
import { Country } from "./entities/country";
import { Continent } from "./entities/continent";

const db = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  entities: [Country, Continent],
  synchronize: true,
  logging: true,
});

export default db;
