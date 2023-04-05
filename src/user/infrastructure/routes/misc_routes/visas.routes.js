import { Router } from "express";
import {
  createVisa,
  deleteVisa,
  getVisa,
  getVisas,
  updateVisa,
} from "../../controller/misc_controller/visas.controller.js";

const visaRoutes = Router();

visaRoutes.get("/visas", getVisas);
visaRoutes.post("/visas", createVisa);
visaRoutes.put("/visas/:id", updateVisa);
visaRoutes.delete("/visas/:id", deleteVisa);
visaRoutes.get("/visas/:id", getVisa);

export default visaRoutes;
