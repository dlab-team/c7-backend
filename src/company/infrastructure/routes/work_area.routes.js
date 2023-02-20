import { Router } from "express";
import {
  createWorkArea,
  deleteWorkArea,
  getWorkArea,
  getWorkAreas,
  updateWorkArea,
} from "../controller/work_area.controller.js";

const workAreaRoutes = Router();

workAreaRoutes.get("/workarea", getWorkAreas);
workAreaRoutes.post("/workarea", createWorkArea);
workAreaRoutes.put("/workarea/:id", updateWorkArea);
workAreaRoutes.delete("/workarea/:id", deleteWorkArea);
workAreaRoutes.get("/workarea/:id", getWorkArea);
//workArea.get("/workarea/:id", getCompanyInWorkArea);

export default workAreaRoutes;
