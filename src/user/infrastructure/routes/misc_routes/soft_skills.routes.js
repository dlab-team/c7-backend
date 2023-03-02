import { Router } from "express";
import {
  createSoftSkill,
  deleteSoftSkill,
  getSoftSkill,
  getSoftSkills,
  updateSoftSkill,
} from "../../controller/misc_controller/soft_skills.controller.js";

const softSkillsRoutes = Router();

softSkillsRoutes.get("/softskills", getSoftSkills);
softSkillsRoutes.post("/softskills", createSoftSkill);
softSkillsRoutes.put("/softskills/:id", updateSoftSkill);
softSkillsRoutes.delete("/softskills/:id", deleteSoftSkill);
softSkillsRoutes.get("/softskills/:id", getSoftSkill);

export default softSkillsRoutes;
