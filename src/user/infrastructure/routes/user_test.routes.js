import { Router } from "express";
import {
  createUserTest,
  deleteUserTest,
  getUserTest,
  getUserTests,
  updateUserTest,
} from "../controller/user_test.controller.js";

const userTestRoutes = Router();

userTestRoutes.get("/userstests", getUserTests);
userTestRoutes.post("/userstests", createUserTest);
userTestRoutes.put("/userstests/:id", updateUserTest);
userTestRoutes.delete("/userstests/:id", deleteUserTest);
userTestRoutes.get("/userstests/:id", getUserTest);

export default userTestRoutes;
