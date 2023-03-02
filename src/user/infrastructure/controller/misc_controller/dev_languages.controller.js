import { dev_languages } from "../../../application/model/misc_model/dev_languages.model.js";

export const getDevLanguages = async (req, res) => {
  try {
    const devLanguages = await dev_languages.findAll();
    res.json(devLanguages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDevLanguage = async (req, res) => {
  try {
    const devLanguageById = await dev_languages.findByPk(req.params.id);
    if (!devLanguageById)
      return res.status(404).json({ message: "El dev-language no existe" });
    res.json(devLanguageById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDevLanguage = async (req, res) => {
  try {
    const newDevLanguage = await dev_languages.create({
      name: req.body.name,
    });
    res.json(newDevLanguage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDevLanguage = async (req, res) => {
  try {
    const devLanguageByPk = await dev_languages.findByPk(req.params.id);
    devLanguageByPk.name = req.body?.name;
    await devLanguageByPk.save();
    res.json(devLanguageByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDevLanguage = async (req, res) => {
  try {
    await dev_languages.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
