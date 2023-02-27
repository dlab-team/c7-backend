import { Router } from "express";
import {
  createWorkProfileDatabase,
  deleteWorkProfileDatabase,
  getWorkProfileDatabase,
  getWorkProfileDatabases,
  updateWorkProfileDatabase,
} from "../../controller/work_profile_controller/work_profile_databases.controller.js";

const workProfileDatabasesRoutes = Router();

workProfileDatabasesRoutes.get(
  "/workprofiledatabases",
  getWorkProfileDatabases
);
workProfileDatabasesRoutes.post(
  "/workprofiledatabases",
  createWorkProfileDatabase
);
workProfileDatabasesRoutes.put(
  "/workprofiledatabases/:id",
  updateWorkProfileDatabase
);
workProfileDatabasesRoutes.delete(
  "/workprofiledatabases/:id",
  deleteWorkProfileDatabase
);
workProfileDatabasesRoutes.get(
  "/workprofiledatabases/:id",
  getWorkProfileDatabase
);

export default workProfileDatabasesRoutes;
