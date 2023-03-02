import { Router } from "express";
import {
  createTestsDatabase,
  deleteTestsDatabase,
  getTestsDatabase,
  getTestsDatabases,
  updateTestsDatabase,
} from "../../controller/test_misc_controller/tests_databases.controller.js";

const testsDatabasesRoutes = Router();

testsDatabasesRoutes.get("/testsdatabases", getTestsDatabases);
testsDatabasesRoutes.post("/testsdatabases", createTestsDatabase);
testsDatabasesRoutes.put("/testsdatabases/:id", updateTestsDatabase);
testsDatabasesRoutes.delete("/testsdatabases/:id", deleteTestsDatabase);
testsDatabasesRoutes.get("/testsdatabases/:id", getTestsDatabase);

export default testsDatabasesRoutes;
