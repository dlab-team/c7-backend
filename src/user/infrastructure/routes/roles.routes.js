import { Router } from "express";
import {
  createRoles,
  deleteRol,
  getRol,
  getRoles,
  getRoleUsers,
  updateRol,
} from "../controller/role.controller.js";

const rolesRoutes = Router();

rolesRoutes.get("/roles", getRoles);
rolesRoutes.post("/roles", createRoles);
rolesRoutes.put("/roles/:id", updateRol);
rolesRoutes.delete("/roles/:id", deleteRol);
rolesRoutes.get("/roles/:id", getRol);
rolesRoutes.get("/roles/:id/users", getRoleUsers);

export default rolesRoutes;
