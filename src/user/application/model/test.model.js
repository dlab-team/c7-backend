import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { tests_databases } from "./tests_misc_model/tests_databases.model.js";
import { tests_dev_languages } from "./tests_misc_model/tests_dev_languages.model.js";
import { tests_soft_skills } from "./tests_misc_model/tests_soft_skills.model.js";
import { tests_tools } from "./tests_misc_model/tests_tools.model.js";
import { user_test } from "./user_test.model.js";

export const test = sequelize.define("test", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.STRING,
  },
  link: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

test.hasMany(user_test, {
  foreignKey: "test_id",
  sourceKey: "id",
});

user_test.belongsTo(test, {
  foreignKey: "test_id",
  targetKey: "id",
});

test.hasMany(tests_databases, {
  foreignKey: "test_id",
  sourceKey: "id",
});

tests_databases.belongsTo(test, {
  foreignKey: "test_id",
  targetKey: "id",
});

test.hasMany(tests_dev_languages, {
  foreignKey: "test_id",
  sourceKey: "id",
});

tests_dev_languages.belongsTo(test, {
  foreignKey: "test_id",
  targetKey: "id",
});

test.hasMany(tests_soft_skills, {
  foreignKey: "test_id",
  sourceKey: "id",
});

tests_soft_skills.belongsTo(test, {
  foreignKey: "test_id",
  targetKey: "id",
});

test.hasMany(tests_tools, {
  foreignKey: "test_id",
  sourceKey: "id",
});

tests_tools.belongsTo(test, {
  foreignKey: "test_id",
  targetKey: "id",
});
