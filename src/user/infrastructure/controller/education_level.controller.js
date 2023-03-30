import { education_levels } from "../../application/model/education_level.model.js";

export const getEducationLevels = async (req, res) => {
  try {
    const educationLevels = await education_levels.findAll();
    res.json(educationLevels);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEducationLevel = async (req, res) => {
  try {
    const educationLevelById = await education_levels.findByPk(req.params.id);
    if (!educationLevelById)
      return res.status(404).json({ message: "El education_level no existe" });
    res.json(rolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEducationLevel = async (req, res) => {
  try {
    const newEducationLevel = await education_levels.create({
      education_level: req.body.education_level.toUpperCase(),
    });
    res.json(newEducationLevel);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEducationLevel = async (req, res) => {
  try {
    const educationLevelByPk = await education_levels.findByPk(req.params.id);
    educationLevelByPk.education_level =
      req.body?.education_level.toUpperCase();
    await educationLevelByPk.save();
    res.json(educationLevelByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEducationLevel = async (req, res) => {
  try {
    await education_levels.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
