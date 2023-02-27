import { work_profile_dev_languages } from "../../../application/model/work_profile_misc_model/work_profile_dev_languages.model.js";

export const getWorkProfileDevLanguages = async (req, res) => {
  try {
    const workProfileDevLanguages = await work_profile_dev_languages.findAll();
    res.json(workProfileDevLanguages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkProfileDevLanguage = async (req, res) => {
  try {
    const workProfileDevLanguageById =
      await work_profile_dev_languages.findByPk(req.params.id);
    if (!workProfileDevLanguageById)
      return res
        .status(404)
        .json({ message: "El dev-language del perfil de trabajo no existe" });
    res.json(workProfileDevLanguageById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkProfileDevLanguage = async (req, res) => {
  try {
    const newWorkProfileDevLanguage = await work_profile_dev_languages.create({
      work_profile_id: req.body.work_profile_id,
      dev_language_id: req.body.dev_language_id,
      level: req.body.level,
    });
    res.json(newWorkProfileDevLanguage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkProfileDevLanguage = async (req, res) => {
  try {
    const devLanguageByPk = await work_profile_dev_languages.findByPk(
      req.params.id
    );
    devLanguageByPk.work_profile_id = req.body?.work_profile_id;
    devLanguageByPk.dev_language_id = req.body?.dev_language_id;
    devLanguageByPk.level = req.body?.level;
    await devLanguageByPk.save();
    res.json(devLanguageByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkProfileDevLanguage = async (req, res) => {
  try {
    await work_profile_dev_languages.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
