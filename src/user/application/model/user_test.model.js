import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";

export const user_test = sequelize.define("user_test", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  test_id: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});
