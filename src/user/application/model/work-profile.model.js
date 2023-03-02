import { sequelize } from "../../../database/sequelize-pg.js";
import { DataTypes } from "sequelize";
import { education_experiences } from "./education_experiences.model.js";
import { work_profile_databases } from "./work_profile_misc_model/work_profile_databases.model.js";
import { work_profile_dev_languages } from "./work_profile_misc_model/work_profile_dev_languages.model.js";
import { work_profile_soft_skills } from "./work_profile_misc_model/work_profile_soft_skills.model.js";
import { work_profile_tools } from "./work_profile_misc_model/work_profile_tools.model.js";
import { tests_databases } from "./tests_misc_model/tests_databases.model.js";
import { tests_dev_languages } from "./tests_misc_model/tests_dev_languages.model.js";
import { tests_soft_skills } from "./tests_misc_model/tests_soft_skills.model.js";
import { tests_tools } from "./tests_misc_model/tests_tools.model.js";

export const work_profiles = sequelize.define("work_profile", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  gender: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  education_status: {
    type: DataTypes.STRING,
  },
  english_level: {
    type: DataTypes.STRING,
  },
  cv_url: {
    type: DataTypes.STRING,
  },
  linkedin_url: {
    type: DataTypes.STRING,
  },
  github_url: {
    type: DataTypes.STRING,
  },
  featured_project: {
    type: DataTypes.STRING,
  },
  work_availability: {
    type: DataTypes.STRING,
  },
  dev_experience: {
    type: DataTypes.STRING,
  },
  educational_level: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.STRING,
  },
  ideal_work_comment: {
    type: DataTypes.STRING,
  },
  relocation_option: {
    type: DataTypes.STRING,
  },
  visa: {
    type: DataTypes.STRING,
  },
  design: {
    type: DataTypes.INTEGER,
  },
  portfolio_url: {
    type: DataTypes.STRING,
  },
  stack: {
    type: DataTypes.STRING,
  },
  additional_tools_comments: {
    type: DataTypes.STRING,
  },
  employment_status_current: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  current_salary: {
    type: DataTypes.STRING,
  },
  availability_status: {
    type: DataTypes.STRING,
  },
});

work_profiles.hasMany(education_experiences, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

education_experiences.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasOne(work_profile_databases, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_databases.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasOne(work_profile_dev_languages, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_dev_languages.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasOne(work_profile_soft_skills, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_soft_skills.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasOne(work_profile_tools, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_tools.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});
