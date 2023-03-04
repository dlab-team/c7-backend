import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_job_options } from "../work_profile_misc_model/work_profile_job_options.model.js";

export const job_options_model = sequelize.define("job_options", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

job_options_model.hasMany(work_profile_job_options, {
  foreignKey: "ideal_work_id",
  sourceKey: "id",
});

work_profile_job_options.belongsTo(job_options_model, {
  foreignKey: "ideal_work_id",
  targetKey: "id",
});
