import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";

export const work_profile_tools = sequelize.define("work_profile_tools", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  work_profile_id: {
    type: DataTypes.INTEGER,
  },
  tools_id: {
    type: DataTypes.INTEGER,
  },
  level: {
    type: DataTypes.INTEGER,
  },
});
