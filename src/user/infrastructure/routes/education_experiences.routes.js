import { Router } from "express";
import {
  createEducationExperience,
  deleteEducationExperience,
  getEducationExperience,
  getEducationExperienceInWorkProfile,
  getEducationExperiences,
  updateEducationExperience,
} from "../controller/education_experiences.controller.js";

const educationExperiencesRoutes = Router();

educationExperiencesRoutes.get(
  "/educationexperiences",
  getEducationExperiences
);
educationExperiencesRoutes.post(
  "/educationexperiences",
  createEducationExperience
);
educationExperiencesRoutes.put(
  "/educationexperiences/:id",
  updateEducationExperience
);
educationExperiencesRoutes.delete(
  "/educationexperiences/:id",
  deleteEducationExperience
);
educationExperiencesRoutes.get(
  "/educationexperiences/:id",
  getEducationExperience
);

export default educationExperiencesRoutes;
