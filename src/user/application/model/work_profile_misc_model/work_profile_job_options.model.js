import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const work_profile_job_options = sequelize.define(
  "work_profile_job_options",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
    },
    ideal_work_id: {
      type: DataTypes.INTEGER,
    },
  }
);
