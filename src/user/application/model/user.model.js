import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { work_profiles } from "./work-profile.model.js";
import { user_test } from "./user_test.model.js";

export const users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  rol_id: {
    type: DataTypes.INTEGER,
  },
  status_id: {
    type: DataTypes.INTEGER,
  },
});

users.hasMany(user_test, {
  foreignKey: "user_id",
  sourceKey: "id",
});

user_test.belongsTo(users, {
  foreignKey: "user_id",
  targetKey: "id",
});

users.hasOne(work_profiles, {
  foreignKey: "userId",
  sourceKey: "id",
});

work_profiles.belongsTo(users, {
  foreignKey: "userId",
  targetKey: "id",
});
