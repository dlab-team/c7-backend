import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { work_profiles } from "./work-profile.model.js";

export const current_job_status = sequelize.define("current_job_status", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  job_status: {
    type: DataTypes.STRING,
  },
});

current_job_status.hasMany(work_profiles, {
  foreignKey: "current_job_status_id",
  sourceKey: "id",
});

work_profiles.belongsTo(current_job_status, {
  foreignKey: "current_job_status_id",
  targetKey: "id",
});
