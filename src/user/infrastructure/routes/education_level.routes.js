import { Router } from "express";
import {
  createEducationLevel,
  deleteEducationLevel,
  getEducationLevel,
  getEducationLevels,
  updateEducationLevel,
} from "../controller/education_level.controller.js";

const educationLevelRoutes = Router();

educationLevelRoutes.get("/roles", getEducationLevels);
educationLevelRoutes.post("/roles", createEducationLevel);
educationLevelRoutes.put("/roles/:id", updateEducationLevel);
educationLevelRoutes.delete("/roles/:id", deleteEducationLevel);
educationLevelRoutes.get("/roles/:id", getEducationLevel);

export default educationLevelRoutes;
