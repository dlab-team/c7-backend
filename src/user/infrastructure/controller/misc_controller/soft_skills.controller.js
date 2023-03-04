import { soft_skills } from "../../../application/model/misc_model/soft_skills.model.js";

export const getSoftSkills = async (req, res) => {
  try {
    const softSkills = await soft_skills.findAll();
    res.json(softSkills);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSoftSkill = async (req, res) => {
  try {
    const softSkillById = await soft_skills.findByPk(req.params.id);
    if (!softSkillById)
      return res.status(404).json({ message: "El soft-skill no existe" });
    res.json(softSkillById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSoftSkill = async (req, res) => {
  try {
    const newSoftSkill = await soft_skills.create({
      name: req.body.name,
    });
    res.json(newSoftSkill);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSoftSkill = async (req, res) => {
  try {
    const softSkillByPk = await soft_skills.findByPk(req.params.id);
    softSkillByPk.name = req.body?.name;
    await softSkillByPk.save();
    res.json(softSkillByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSoftSkill = async (req, res) => {
  try {
    await soft_skills.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
