import { Router } from "express";
import {
  createTool,
  deleteTool,
  getTool,
  getTools,
  updateTool,
} from "../../controller/misc_controller/tools.controller.js";

const toolsRoutes = Router();

toolsRoutes.get("/tools", getTools);
toolsRoutes.post("/tools", createTool);
toolsRoutes.put("/tools/:id", updateTool);
toolsRoutes.delete("/tools/:id", deleteTool);
toolsRoutes.get("/tools/:id", getTool);

export default toolsRoutes;
