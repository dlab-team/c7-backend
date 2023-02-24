import { Router } from "express";
import {
  createStatus,
  deleteStatus,
  getStatus,
  getStatuses,
  getStatusUsers,
  updateStatus,
} from "../controller/status.controller.js";

const statusRoutes = Router();

statusRoutes.get("/status", getStatuses);
statusRoutes.post("/status", createStatus);
statusRoutes.put("/status/:id", updateStatus);
statusRoutes.delete("/status/:id", deleteStatus);
statusRoutes.get("/status/:id", getStatus);
statusRoutes.get("/status/:id/users", getStatusUsers);

export default statusRoutes;
