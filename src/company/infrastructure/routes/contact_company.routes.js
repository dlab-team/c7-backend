import { Router } from "express";
import {
  createContactCompany,
  deleteContactCompany,
  getContactCompanies,
  getContactCompany,
  updateContactCompany,
} from "../controller/contact_company.controller.js";

const contactCompanyRoutes = Router();

contactCompanyRoutes.get("/contactcompany", getContactCompanies);
contactCompanyRoutes.post("/contactcompany", createContactCompany);
contactCompanyRoutes.put("/contactcompany/:id", updateContactCompany);
contactCompanyRoutes.delete("/contactcompany/:id", deleteContactCompany);
contactCompanyRoutes.get("/contactcompany/:id", getContactCompany);

export default contactCompanyRoutes;
