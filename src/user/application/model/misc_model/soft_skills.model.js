import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_soft_skills } from "../work_profile_misc_model/work_profile_soft_skills.model.js";
import { tests_soft_skills } from "../tests_misc_model/tests_soft_skills.model.js";

export const soft_skills = sequelize.define("soft_skills", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

soft_skills.hasMany(work_profile_soft_skills, {
  foreignKey: "soft_skills_id",
  sourceKey: "id",
});

work_profile_soft_skills.belongsTo(soft_skills, {
  foreignKey: "soft_skills_id",
  targetKey: "id",
});

soft_skills.hasMany(tests_soft_skills, {
  foreignKey: "soft_skills_id",
  sourceKey: "id",
});

tests_soft_skills.belongsTo(soft_skills, {
  foreignKey: "soft_skills_id",
  targetKey: "id",
});
