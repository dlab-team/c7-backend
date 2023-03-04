import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "c7-provisorio-v2",
  "postgres",
  "admin",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
