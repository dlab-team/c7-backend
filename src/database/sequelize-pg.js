import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "c7_provisorio_v2",
  "postgres",
  "1213",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
