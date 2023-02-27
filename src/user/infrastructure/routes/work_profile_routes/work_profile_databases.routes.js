import { Router } from "express";
import {
  createWorkProfileDatabase,
  deleteWorkProfileDatabase,
  getWorkProfileDatabase,
  getWorkProfileDatabases,
  updateWorkProfileDatabase,
} from "../../controller/work_profile_controller/work_profile_databases.controller.js";

const workProfileDatabasesRoutes = Router();

workProfileDatabasesRoutes.get("/workprofiledatabase", getWorkProfileDatabases);
workProfileDatabasesRoutes.post(
  "/workprofiledatabase",
  createWorkProfileDatabase
);
workProfileDatabasesRoutes.put(
  "/workprofiledatabase/:id",
  updateWorkProfileDatabase
);
workProfileDatabasesRoutes.delete(
  "/workprofiledatabase/:id",
  deleteWorkProfileDatabase
);
workProfileDatabasesRoutes.get(
  "/workprofiledatabase/:id",
  getWorkProfileDatabase
);

export default workProfileDatabasesRoutes;
