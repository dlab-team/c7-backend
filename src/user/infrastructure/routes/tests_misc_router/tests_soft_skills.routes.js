import { Router } from "express";
import {
  createTestsSoftSkill,
  deleteTestsSoftSkill,
  getTestsSoftSkill,
  getTestsSoftSkills,
  updateTestsSoftSkill,
} from "../../controller/test_misc_controller/tests_soft_skills.controller.js";

const testsSoftSkillsRoutes = Router();

testsSoftSkillsRoutes.get("/testssoftskills", getTestsSoftSkills);
testsSoftSkillsRoutes.post("/testssoftskills", createTestsSoftSkill);
testsSoftSkillsRoutes.put("/testssoftskills/:id", updateTestsSoftSkill);
testsSoftSkillsRoutes.delete("/testssoftskills/:id", deleteTestsSoftSkill);
testsSoftSkillsRoutes.get("/testssoftskills/:id", getTestsSoftSkill);

export default testsSoftSkillsRoutes;
