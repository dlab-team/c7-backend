import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";

const userRoutes = Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", createUser);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);
userRoutes.get("/users/:id", getUser);

export default userRoutes;
