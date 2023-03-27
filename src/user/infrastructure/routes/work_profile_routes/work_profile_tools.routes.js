import { Router } from "express";
import {
  createWorkProfileTool,
  deleteWorkProfileTool,
  getWorkProfileTool,
  getWorkProfileTools,
  updateWorkProfileTool,
} from "../../controller/work_profile_controller/work_profile_tools.controller.js";

const workProfileToolsRoutes = Router();

workProfileToolsRoutes.get("/workprofiletools", getWorkProfileTools);
workProfileToolsRoutes.post("/workprofiletools", createWorkProfileTool);
workProfileToolsRoutes.put("/workprofiletools/:id", updateWorkProfileTool);
workProfileToolsRoutes.delete("/workprofiletools/:id", deleteWorkProfileTool);
workProfileToolsRoutes.get("/workprofiletools/:id", getWorkProfileTool);

export default workProfileToolsRoutes;
