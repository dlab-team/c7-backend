import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_databases } from "../work_profile_misc_model/work_profile_databases.model.js";
import { tests_databases } from "../tests_misc_model/tests_databases.model.js";

export const databases_model = sequelize.define("databases", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

databases_model.hasMany(work_profile_databases, {
  foreignKey: "databases_id",
  sourceKey: "id",
});

work_profile_databases.belongsTo(databases_model, {
  foreignKey: "databases_id",
  targetKey: "id",
});

databases_model.hasMany(tests_databases, {
  foreignKey: "databases_id",
  sourceKey: "id",
});

tests_databases.belongsTo(databases_model, {
  foreignKey: "databases_id",
  targetKey: "id",
});
