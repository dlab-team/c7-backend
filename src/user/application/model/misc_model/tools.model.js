import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_tools } from "../work_profile_misc_model/work_profile_tools.model.js";
import { tests_tools } from "../tests_misc_model/tests_tools.model.js";

export const tools = sequelize.define("tools", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

tools.hasMany(work_profile_tools, {
  foreignKey: "tools_id",
  sourceKey: "id",
});

work_profile_tools.belongsTo(tools, {
  foreignKey: "tools_id",
  targetKey: "id",
});

tools.hasMany(tests_tools, {
  foreignKey: "tools_id",
  sourceKey: "id",
});

tests_tools.belongsTo(tools, {
  foreignKey: "tools_id",
  targetKey: "id",
});
