import { sequelize } from "../../../database/sequelize-pg.js";
import { DataTypes } from "sequelize";

export const education_experiences = sequelize.define("education_experiences", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  work_profile_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  institute_name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  start_month: {
    type: DataTypes.STRING,
  },
  end_month: {
    type: DataTypes.STRING,
  },
  start_year: {
    type: DataTypes.INTEGER,
  },
  end_year: {
    type: DataTypes.INTEGER,
  },
});
