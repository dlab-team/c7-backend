import { sequelize } from "../../../database/sequelize-pg.js";
import { DataTypes } from "sequelize";
import { education_experiences } from "./education_experiences.model.js";
import { work_profile_databases } from "./work_profile_misc_model/work_profile_databases.model.js";
import { work_profile_dev_languages } from "./work_profile_misc_model/work_profile_dev_languages.model.js";
import { work_profile_soft_skills } from "./work_profile_misc_model/work_profile_soft_skills.model.js";
import { work_profile_tools } from "./work_profile_misc_model/work_profile_tools.model.js";
import { work_profile_job_options } from "./work_profile_misc_model/work_profile_job_options.model.js";

export const work_profiles = sequelize.define("work_profile", {
  //CHECK
  id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //CHECK
  gender: { 
    type: DataTypes.STRING,
  },
  //CHECK
  phone_number: { 
    type: DataTypes.STRING,
  },
  //CHECK
  city: { 
    type: DataTypes.STRING,
  },
  //CHECK
  country: { 
    type: DataTypes.STRING,
  },
  //CHECK
  education_status: { 
    type: DataTypes.STRING,
  },
  //CHECK
  english_level: { 
    type: DataTypes.STRING,
  },
  //CHECK
  cv_url: { 
    type: DataTypes.STRING,
  },
  //CHECK
  linkedin_url: { 
    type: DataTypes.STRING,
  },
  //CHECK
  github_url: { 
    type: DataTypes.STRING,
  },
  //CHECK
  featured_project: { 
    type: DataTypes.STRING,
  },
  //Se elimina
  work_availability: { 
    type: DataTypes.STRING,
  },

  dev_experience: {
    type: DataTypes.STRING,
  },
  // Se elimina
  educational_level: { 
    type: DataTypes.STRING,
  },
  // Se elimina
  comment: { 
    type: DataTypes.STRING,
  },
  //Cambiar a text
  ideal_work_comment: { 
    type: DataTypes.STRING,
  },
  // CHECK
  relocation_option: { 
    type: DataTypes.STRING,
  },
  // Se elimina
  visa: { 
    type: DataTypes.STRING,
  },
  // Se elimina
  design: { 
    type: DataTypes.INTEGER,
  },
  // CHECK
  portfolio_url: { 
    type: DataTypes.STRING,
  },
  // Se elimina
  stack: { 
    type: DataTypes.STRING,
  },
  // Cambiar a text
  additional_tools_comments: { 
    type: DataTypes.STRING,
  },
  // Se elimina
  employment_status_current: { 
    type: DataTypes.STRING,
  },
  // CHECK
  userId: { 
    type: DataTypes.INTEGER,
  },
  // CHECK
  current_salary: { 
    type: DataTypes.STRING,
  },
  // Se elimina
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

work_profiles.hasMany(work_profile_databases, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_databases.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasMany(work_profile_dev_languages, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_dev_languages.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasMany(work_profile_soft_skills, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_soft_skills.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasMany(work_profile_tools, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_tools.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});

work_profiles.hasMany(work_profile_job_options, {
  foreignKey: "work_profile_id",
  sourceKey: "id",
});

work_profile_job_options.belongsTo(work_profiles, {
  foreignKey: "work_profile_id",
  targetKey: "id",
});
