import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { work_profiles } from "./work-profile.model.js";

export const education_levels = sequelize.define("education_levels", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  education_level: {
    type: DataTypes.STRING,
  },
});

education_levels.hasMany(work_profiles, {
  foreignKey: "education_level_id",
  sourceKey: "id",
});

work_profiles.belongsTo(education_levels, {
  foreignKey: "education_level_id",
  targetKey: "id",
});
