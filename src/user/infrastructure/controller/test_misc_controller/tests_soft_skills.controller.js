import { tests_soft_skills } from "../../../application/model/tests_misc_model/tests_soft_skills.model.js";

export const getTestsSoftSkills = async (req, res) => {
  try {
    const testsSoftSkills = await tests_soft_skills.findAll();
    res.json(testsSoftSkills);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTestsSoftSkill = async (req, res) => {
  try {
    const testsSoftSkillById = await tests_soft_skills.findByPk(req.params.id);
    if (!testsSoftSkillById)
      return res
        .status(404)
        .json({ message: "El soft-skill de Tests no existe" });
    res.json(testsSoftSkillById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTestsSoftSkill = async (req, res) => {
  try {
    const newTestsSoftSkill = await tests_soft_skills.create({
      test_id: req.body.test_id,
      soft_skill_id: req.body.soft_skill_id,
      level: req.body.level,
    });
    res.json(newTestsSoftSkill);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTestsSoftSkill = async (req, res) => {
  try {
    const softSkillByPk = await tests_soft_skills.findByPk(req.params.id);
    softSkillByPk.test_id = req.body?.test_id;
    softSkillByPk.soft_skill_id = req.body?.soft_skill_id;
    softSkillByPk.level = req.body?.level;
    await softSkillByPk.save();
    res.json(softSkillByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTestsSoftSkill = async (req, res) => {
  try {
    await tests_soft_skills.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
