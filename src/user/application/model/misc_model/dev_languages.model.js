import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_dev_languages } from "../work_profile_misc_model/work_profile_dev_languages.model.js";
import { tests_dev_languages } from "../tests_misc_model/tests_dev_languages.model.js";

export const dev_languages = sequelize.define("dev_languages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

dev_languages.hasMany(work_profile_dev_languages, {
  foreignKey: "dev_languages_id",
  sourceKey: "id",
});

work_profile_dev_languages.belongsTo(dev_languages, {
  foreignKey: "dev_languages_id",
  targetKey: "id",
});

dev_languages.hasMany(tests_dev_languages, {
  foreignKey: "dev_languages_id",
  sourceKey: "id",
});

tests_dev_languages.belongsTo(dev_languages, {
  foreignKey: "dev_languages_id",
  targetKey: "id",
});
