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
      name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
      institute_name:
        req.body.institute_name.charAt(0).toUpperCase() +
        req.body.institute_name.slice(1),
      type: req.body.type.charAt(0).toUpperCase() + req.body.type.slice(1),
      start_month:
        req.body.start_month.charAt(0).toUpperCase() +
        req.body.start_month.slice(1),
      end_month:
        req.body.end_month.charAt(0).toUpperCase() +
        req.body.end_month.slice(1),
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
    workProfileByPk.name =
      req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
    workProfileByPk.institute_name =
      req.body.institute_name.charAt(0).toUpperCase() +
      req.body.institute_name.slice(1);
    workProfileByPk.type =
      req.body.type.charAt(0).toUpperCase() + req.body.type.slice(1);
    workProfileByPk.start_month =
      req.body.start_month.charAt(0).toUpperCase() +
      req.body.start_month.slice(1);
    workProfileByPk.end_month =
      req.body.end_month.charAt(0).toUpperCase() + req.body.end_month.slice(1);
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
