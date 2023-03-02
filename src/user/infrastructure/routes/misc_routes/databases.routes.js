import { Router } from "express";
import {
  createDatabase,
  deleteDatabase,
  getDatabase,
  getDatabases,
  updateDatabase,
} from "../../controller/misc_controller/databases.controller.js";

const databasesRoutes = Router();

databasesRoutes.get("/databases", getDatabases);
databasesRoutes.post("/databases", createDatabase);
databasesRoutes.put("/databases/:id", updateDatabase);
databasesRoutes.delete("/databases/:id", deleteDatabase);
databasesRoutes.get("/databases/:id", getDatabase);

export default databasesRoutes;
