import { Router } from "express";
import {
  createTest,
  deleteTest,
  getTest,
  getTests,
  updateTest,
  getUserTestsInTest,
} from "../controller/test.controller.js";

const testRoutes = Router();

testRoutes.get("/test", getTests);
testRoutes.post("/test", createTest);
testRoutes.put("/test/:id", updateTest);
testRoutes.delete("/test/:id", deleteTest);
testRoutes.get("/test/:id", getTest);
testRoutes.get("/test/:id/user", getUserTestsInTest);

export default testRoutes;
