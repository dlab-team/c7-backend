import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const work_profile_job_availability_model = sequelize.define(
  "work_profile_job_availability",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    work_profile_id: {
      type: DataTypes.INTEGER,
    },
    availability_id: {
      type: DataTypes.INTEGER,
    },
  }
);
