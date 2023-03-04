import { Router } from "express";
import {
  createWorkProfileDevLanguage,
  deleteWorkProfileDevLanguage,
  getWorkProfileDevLanguage,
  getWorkProfileDevLanguages,
  updateWorkProfileDevLanguage,
} from "../../controller/work_profile_controller/work_profile_dev_languages.controller.js";

const workProfileDevLanguagesRoutes = Router();

workProfileDevLanguagesRoutes.get(
  "/workprofiledevlanguages",
  getWorkProfileDevLanguages
);
workProfileDevLanguagesRoutes.post(
  "/workprofiledevlanguages",
  createWorkProfileDevLanguage
);
workProfileDevLanguagesRoutes.put(
  "/workprofiledevlanguages/:id",
  updateWorkProfileDevLanguage
);
workProfileDevLanguagesRoutes.delete(
  "/workprofiledevlanguages/:id",
  deleteWorkProfileDevLanguage
);
workProfileDevLanguagesRoutes.get(
  "/workprofiledevlanguages/:id",
  getWorkProfileDevLanguage
);

export default workProfileDevLanguagesRoutes;
