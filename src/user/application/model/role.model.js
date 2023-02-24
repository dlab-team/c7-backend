import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { users } from "./user.model.js";

export const role = sequelize.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

role.hasMany(users, {
  foreignKey: "rol_id",
  sourceKey: "id",
});

users.belongsTo(role, {
  foreignKey: "rol_id",
  targetKey: "id",
});
