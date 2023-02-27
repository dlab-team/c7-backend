import { Router } from "express";
import {
  createCompanyWorkArea,
  deleteCompanyWorkArea,
  getCompanyWorkArea,
  getCompanyWorkAreas,
  updateCompanyWorkArea,
} from "../controller/company_work_area.controller.js";

const companyWorkAreaRoutes = Router();

companyWorkAreaRoutes.get("/companyworkarea", getCompanyWorkAreas);
companyWorkAreaRoutes.post("/companyworkarea", createCompanyWorkArea);
companyWorkAreaRoutes.put("/companyworkarea/:id", updateCompanyWorkArea);
companyWorkAreaRoutes.delete("/companyworkarea/:id", deleteCompanyWorkArea);
companyWorkAreaRoutes.get("/companyworkarea/:id", getCompanyWorkArea);

export default companyWorkAreaRoutes;
