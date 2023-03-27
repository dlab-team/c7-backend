import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  getUserTestsInUser,
  getWorkProfileInUser,
} from "../controller/user.controller.js";

const userRoutes = Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", createUser);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);
userRoutes.get("/users/:id", getUser);
userRoutes.get("/users/:id/usertest", getUserTestsInUser);
userRoutes.get("/users/:id/workprofile", getWorkProfileInUser);

export default userRoutes;
