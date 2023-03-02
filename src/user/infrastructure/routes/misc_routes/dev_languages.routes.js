import { Router } from "express";
import {
  createDevLanguage,
  deleteDevLanguage,
  getDevLanguage,
  getDevLanguages,
  updateDevLanguage,
} from "../../controller/misc_controller/dev_languages.controller.js";

const devLanguagesRoutes = Router();

devLanguagesRoutes.get("/devlanguages", getDevLanguages);
devLanguagesRoutes.post("/devlanguages", createDevLanguage);
devLanguagesRoutes.put("/devlanguages/:id", updateDevLanguage);
devLanguagesRoutes.delete("/devlanguages/:id", deleteDevLanguage);
devLanguagesRoutes.get("/devlanguages/:id", getDevLanguage);

export default devLanguagesRoutes;
