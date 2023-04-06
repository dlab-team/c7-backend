import { Router } from "express";
import {
  createTestsTool,
  deleteTestsTool,
  getTestsTool,
  getTestsTools,
  updateTestsTool,
} from "../../controller/test_misc_controller/tests_tools.controller.js";

const testsToolsRoutes = Router();

testsToolsRoutes.get("/teststools", getTestsTools);
testsToolsRoutes.post("/teststools", createTestsTool);
testsToolsRoutes.put("/teststools/:id", updateTestsTool);
testsToolsRoutes.delete("/teststools/:id", deleteTestsTool);
testsToolsRoutes.get("/teststools/:id", getTestsTool);

export default testsToolsRoutes;
