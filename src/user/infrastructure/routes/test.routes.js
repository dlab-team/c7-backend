import { Router } from "express";
import {
  createTest,
  deleteTest,
  getTest,
  getTests,
  updateTest,
} from "../controller/test.controller.js";

const testRoutes = Router();

testRoutes.get("/test", getTests);
testRoutes.post("/test", createTest);
testRoutes.put("/test/:id", updateTest);
testRoutes.delete("/test/:id", deleteTest);
testRoutes.get("/test/:id", getTest);

export default testRoutes;
