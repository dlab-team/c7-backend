import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_job_availability_model } from "../work_profile_misc_model/work_profile_job_availability.model.js";

export const job_availability_model = sequelize.define("job_availability", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

job_availability_model.hasMany(work_profile_job_availability_model, {
  foreignKey: "availability_id",
  sourceKey: "id",
});

work_profile_job_availability_model.belongsTo(job_availability_model, {
  foreignKey: "availability_id",
  targetKey: "id",
});
