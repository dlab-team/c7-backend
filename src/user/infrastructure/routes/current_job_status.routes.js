import { Router } from "express";
import {
  createCurrentJobStatus,
  deleteCurrentJobStatus,
  getCurrentJobStatus,
  getCurrentJobStatuses,
  updateCurrentJobStatus,
} from "../controller/current_job_status.controller.js";

const currentJobStatusRoutes = Router();

currentJobStatusRoutes.get("/roles", getCurrentJobStatuses);
currentJobStatusRoutes.post("/roles", createCurrentJobStatus);
currentJobStatusRoutes.put("/roles/:id", updateCurrentJobStatus);
currentJobStatusRoutes.delete("/roles/:id", deleteCurrentJobStatus);
currentJobStatusRoutes.get("/roles/:id", getCurrentJobStatus);

export default currentJobStatusRoutes;
