import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";

export const company_work_area = sequelize.define("company_work_area", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_id: {
    type: DataTypes.INTEGER,
  },
  work_area_id: {
    type: DataTypes.INTEGER,
  },
});
