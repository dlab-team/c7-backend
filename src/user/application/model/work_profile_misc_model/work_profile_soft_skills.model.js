import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const work_profile_soft_skills = sequelize.define(
  "work_profile_soft_skills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
    },
    soft_skills_id: {
      type: DataTypes.INTEGER,
    },
  }
);
