import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { company_work_area } from "./company_work_area.model.js";

export const work_areas = sequelize.define("work_areas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

work_areas.hasMany(company_work_area, {
  foreignKey: "work_area_id",
  sourceKey: "id",
});

company_work_area.belongsTo(work_areas, {
  foreignKey: "work_area_id",
  targetKey: "id",
});
