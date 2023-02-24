import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
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
