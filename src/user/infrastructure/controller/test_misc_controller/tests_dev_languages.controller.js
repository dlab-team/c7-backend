import { tests_dev_languages } from "../../../application/model/tests_misc_model/tests_dev_languages.model.js";

export const getTestsDevLanguages = async (req, res) => {
  try {
    const testsDevLanguages = await tests_dev_languages.findAll();
    res.json(testsDevLanguages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTestsDevLanguage = async (req, res) => {
  try {
    const testsDevLanguageById = await tests_dev_languages.findByPk(
      req.params.id
    );
    if (!testsDevLanguageById)
      return res
        .status(404)
        .json({ message: "El dev-language de Tests no existe" });
    res.json(testsDevLanguageById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTestsDevLanguage = async (req, res) => {
  try {
    const newTestsDevLanguage = await tests_dev_languages.create({
      test_id: req.body.test_id,
      dev_languages_id: req.body.dev_languages_id,
      level: req.body.level,
    });
    res.json(newTestsDevLanguage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTestsDevLanguage = async (req, res) => {
  try {
    const devLanguageByPk = await tests_dev_languages.findByPk(req.params.id);
    devLanguageByPk.test_id = req.body?.test_id;
    devLanguageByPk.dev_languages_id = req.body?.dev_languages_id;
    devLanguageByPk.level = req.body?.level;
    await devLanguageByPk.save();
    res.json(devLanguageByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTestsDevLanguage = async (req, res) => {
  try {
    await tests_dev_languages.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
