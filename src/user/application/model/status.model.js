import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { users } from "./user.model.js";

export const status = sequelize.define("user_statuses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

status.hasMany(users, {
  foreignKey: "status_id",
  sourceKey: "id",
});

users.belongsTo(status, {
  foreignKey: "status_id",
  targetKey: "id",
});
