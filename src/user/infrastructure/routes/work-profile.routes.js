import { Router } from "express";
import {
  createWorkProfile,
  getUserWorkProfile,
  deleteWorkProfile,
  getWorkProfile,
  getWorkProfiles,
  updateWorkProfile,
} from "../controller/work-profile.controller.js";

const workProfileRoutes = Router();

workProfileRoutes.get("/workprofiles", getWorkProfiles);
workProfileRoutes.post("/workprofiles", createWorkProfile);
workProfileRoutes.put("/workprofiles/:id", updateWorkProfile);
workProfileRoutes.delete("/workprofiles/:id", deleteWorkProfile);
workProfileRoutes.get("/workprofiles/:id", getWorkProfile);

export default workProfileRoutes;
