import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/sequelize-pg.js";
import { company_work_area } from "./company_work_area.model.js";

export const contact_company = sequelize.define("contact_company", {
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
  phone: {
    type: DataTypes.STRING,
  },
  company_name: {
    type: DataTypes.STRING,
  },
  doubts: {
    type: DataTypes.STRING,
  },
});

contact_company.hasMany(company_work_area, {
  foreignKey: "company_id",
  sourceKey: "id",
});

company_work_area.belongsTo(contact_company, {
  foreignKey: "company_id",
  targetKey: "id",
});
