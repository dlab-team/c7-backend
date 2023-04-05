import { Router } from "express";
import {
  createJobAvailability,
  deleteJobAvailability,
  getJobAvailabilities,
  getJobAvailiability,
  updateJobAvailability,
} from "../../controller/misc_controller/job_availability.controller.js";

const jobAvailabilityRoutes = Router();

jobAvailabilityRoutes.get("/jobavailability", getJobAvailabilities);
jobAvailabilityRoutes.post("/jobavailability", createJobAvailability);
jobAvailabilityRoutes.put("/jobavailability/:id", updateJobAvailability);
jobAvailabilityRoutes.delete("/jobavailability/:id", deleteJobAvailability);
jobAvailabilityRoutes.get("/jobavailability/:id", getJobAvailiability);

export default jobAvailabilityRoutes;
