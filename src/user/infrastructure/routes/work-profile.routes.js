import { Router } from "express";
import {
  createWorkProfile,
  getUserWorkProfile,
  deleteWorkProfile,
  getWorkProfile,
  getWorkProfiles,
  updateWorkProfile,
  getEducationExperienceInWorkProfile,
  populateMultipleTables,
} from "../controller/work-profile.controller.js";

const workProfileRoutes = Router();

workProfileRoutes.get("/workprofiles", getWorkProfiles);
workProfileRoutes.post("/workprofiles", createWorkProfile);
workProfileRoutes.put("/workprofiles/:id", updateWorkProfile);
workProfileRoutes.delete("/workprofiles/:id", deleteWorkProfile);
workProfileRoutes.get("/workprofiles/:id", getWorkProfile);
workProfileRoutes.get(
  "/workprofiles/:id/education",
  getEducationExperienceInWorkProfile
);
// Ruta para poblar distintas tablas con un solo formulario de registro (work_profile, education_experiences, work_profile_databases, work_profile_soft_skills, etc.)
workProfileRoutes.post("/populate", populateMultipleTables);

export default workProfileRoutes;
