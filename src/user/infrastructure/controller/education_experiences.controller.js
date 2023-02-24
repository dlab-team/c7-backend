import { education_experiences } from "../../application/model/education_experiences.model.js";

export const getEducationExperiences = async (req, res) => {
  try {
    const educationExperiences = await education_experiences.findAll();
    res.json(educationExperiences);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEducationExperience = async (req, res) => {
  try {
    const educationExperiencesById = await education_experiences.findByPk(
      req.params.id
    );
    if (!educationExperiencesById)
      return res
        .status(404)
        .json({ message: "El perfil educacional no existe" });
    res.json(educationExperiencesById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEducationExperienceInWorkProfile = async (req, res) => {
  try {
    const educationExperiencesInWorkProfile =
      await education_experiences.findAll({
        where: { work_profile_id: req.params.id },
      });
    return res.json(educationExperiencesInWorkProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEducationExperience = async (req, res) => {
  try {
    const newEducationExperience = await education_experiences.create({
      name: req.body.name,
      work_profile_id: req.body.work_profile_id,
      institute_name: req.body.institute_name,
      type: req.body.type,
      start_month: req.body.start_month,
      end_month: req.body.end_month,
      start_year: req.body.start_year,
      end_year: req.body.end_year,
    });
    res.json(newEducationExperience);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEducationExperience = async (req, res) => {
  try {
    const workProfileByPk = await education_experiences.findByPk(req.params.id);
    workProfileByPk.name = req.body.name;
    workProfileByPk.institute_name = req.body.institute_name;
    workProfileByPk.type = req.body.type;
    workProfileByPk.start_month = req.body.start_month;
    workProfileByPk.end_month = req.body.end_month;
    workProfileByPk.start_year = req.body.start_year;
    workProfileByPk.end_year = req.body.end_year;
    await workProfileByPk.save();
    res.json(workProfileByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEducationExperience = async (req, res) => {
  try {
    await education_experiences.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
