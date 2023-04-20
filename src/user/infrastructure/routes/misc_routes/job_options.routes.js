import { Router } from "express";
import {
  createJobOption,
  deleteDatabase,
  getJobOption,
  getJobOptions,
  updateJobOption,
} from "../../controller/misc_controller/job_options.controller.js";

const jobOptionsRoutes = Router();

jobOptionsRoutes.get("/joboptions", getJobOptions);
jobOptionsRoutes.post("/joboptions", createJobOption);
jobOptionsRoutes.put("/joboptions/:id", updateJobOption);
jobOptionsRoutes.delete("/joboptions/:id", deleteDatabase);
jobOptionsRoutes.get("/joboptions/:id", getJobOption);

export default jobOptionsRoutes;
