import { DataTypes } from "sequelize";
import { sequelize } from "../../../../database/sequelize-pg.js";
import { work_profile_visas } from "../work_profile_misc_model/work_profile_visas.model.js";

export const visas_model = sequelize.define("visas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

visas_model.hasMany(work_profile_visas, {
  foreignKey: "visa_id",
  sourceKey: "id",
});

work_profile_visas.belongsTo(visas_model, {
  foreignKey: "visa_id",
  targetKey: "id",
});
