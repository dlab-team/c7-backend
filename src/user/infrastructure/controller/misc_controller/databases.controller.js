import { databases_model } from "../../../application/model/misc_model/databases.model.js";

export const getDatabases = async (req, res) => {
  try {
    const databases = await databases_model.findAll();
    res.json(databases);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDatabase = async (req, res) => {
  try {
    const databaseById = await databases_model.findByPk(req.params.id);
    if (!databaseById)
      return res.status(404).json({ message: "El database no existe" });
    res.json(databaseById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDatabase = async (req, res) => {
  try {
    const newDatabase = await databases_model.create({
      name: req.body.name,
    });
    res.json(newDatabase);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDatabase = async (req, res) => {
  try {
    const databaseByPk = await databases_model.findByPk(req.params.id);
    databaseByPk.name = req.body?.name;
    await databaseByPk.save();
    res.json(databaseByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDatabase = async (req, res) => {
  try {
    await databases_model.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
