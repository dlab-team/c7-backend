import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const tests_dev_languages = sequelize.define("tests_dev_languages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  test_id: {
    type: DataTypes.INTEGER,
  },
  dev_languages_id: {
    type: DataTypes.INTEGER,
  },
  level: {
    type: DataTypes.INTEGER,
  },
});
