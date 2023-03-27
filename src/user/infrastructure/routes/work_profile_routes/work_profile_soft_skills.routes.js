import { Router } from "express";
import {
  createWorkProfileSoftSkill,
  deleteWorkProfileSoftSkill,
  getWorkProfileSoftSkill,
  getWorkProfileSoftSkills,
  updateWorkProfileSoftSkill,
} from "../../controller/work_profile_controller/work_profile_soft_skills.controller.js";

const workProfileSoftSkillsRoutes = Router();

workProfileSoftSkillsRoutes.get(
  "/workprofilesoftskills",
  getWorkProfileSoftSkills
);
workProfileSoftSkillsRoutes.post(
  "/workprofilesoftskills",
  createWorkProfileSoftSkill
);
workProfileSoftSkillsRoutes.put(
  "/workprofilesoftskills/:id",
  updateWorkProfileSoftSkill
);
workProfileSoftSkillsRoutes.delete(
  "/workprofilesoftskills/:id",
  deleteWorkProfileSoftSkill
);
workProfileSoftSkillsRoutes.get(
  "/workprofilesoftskills/:id",
  getWorkProfileSoftSkill
);

export default workProfileSoftSkillsRoutes;
