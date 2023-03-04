import { Router } from "express";
import {
  createTestsDevLanguage,
  deleteTestsDevLanguage,
  getTestsDevLanguage,
  getTestsDevLanguages,
  updateTestsDevLanguage,
} from "../../controller/test_misc_controller/tests_dev_languages.controller.js";

const testsDevLanguagesRoutes = Router();

testsDevLanguagesRoutes.get("/testsdevlanguages", getTestsDevLanguages);
testsDevLanguagesRoutes.post("/testsdevlanguages", createTestsDevLanguage);
testsDevLanguagesRoutes.put("/testsdevlanguages/:id", updateTestsDevLanguage);
testsDevLanguagesRoutes.delete(
  "/testsdevlanguages/:id",
  deleteTestsDevLanguage
);
testsDevLanguagesRoutes.get("/testsdevlanguages/:id", getTestsDevLanguage);

export default testsDevLanguagesRoutes;
