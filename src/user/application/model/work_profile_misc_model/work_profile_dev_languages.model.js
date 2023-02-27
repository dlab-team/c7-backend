import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const work_profile_dev_languages = sequelize.define(
  "work_profile_dev_languages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
    },
    dev_languages_id: {
      type: DataTypes.INTEGER,
    },
    level: {
      type: DataTypes.INTEGER,
    },
  }
);
