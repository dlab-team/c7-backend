import { work_profile_soft_skills } from "../../../application/model/work_profile_misc_model/work_profile_soft_skills.model.js";

export const getWorkProfileSoftSkills = async (req, res) => {
  try {
    const workProfileSoftSkills = await work_profile_soft_skills.findAll();
    res.json(workProfileSoftSkills);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkProfileSoftSkill = async (req, res) => {
  try {
    const workProfileSoftSKillById = await work_profile_soft_skills.findByPk(
      req.params.id
    );
    if (!workProfileSoftSKillById)
      return res
        .status(404)
        .json({ message: "El soft-skill del perfil de trabajo no existe" });
    res.json(workProfileSoftSKillById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkProfileSoftSkill = async (req, res) => {
  try {
    const newWorkProfileSoftSkill = await work_profile_soft_skills.create({
      work_profile_id: req.body.work_profile_id,
      soft_skill_id: req.body.soft_skill_id,
    });
    res.json(newWorkProfileSoftSkill);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkProfileSoftSkill = async (req, res) => {
  try {
    const softSkillByPk = await work_profile_soft_skills.findByPk(
      req.params.id
    );
    softSkillByPk.work_profile_id = req.body?.work_profile_id;
    softSkillByPk.soft_skill_id = req.body?.soft_skill_id;
    await softSkillByPk.save();
    res.json(softSkillByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkProfileSoftSkill = async (req, res) => {
  try {
    await work_profile_soft_skills.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
