import { tests_databases } from "../../../application/model/tests_misc_model/tests_databases.model.js";

export const getTestsDatabases = async (req, res) => {
  try {
    const testsDatabases = await tests_databases.findAll();
    res.json(testsDatabases);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTestsDatabase = async (req, res) => {
  try {
    const testsDatabaseById = await tests_databases.findByPk(req.params.id);
    if (!testsDatabaseById)
      return res
        .status(404)
        .json({ message: "El database de Tests no existe" });
    res.json(testsDatabaseById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTestsDatabase = async (req, res) => {
  try {
    const newTestsDatabase = await tests_databases.create({
      test_id: req.body.test_id,
      databases_id: req.body.databases_id,
      level: req.body.level,
    });
    res.json(newTestsDatabase);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTestsDatabase = async (req, res) => {
  try {
    const databaseByPk = await tests_databases.findByPk(req.params.id);
    databaseByPk.test_id = req.body?.test_id;
    databaseByPk.databases_id = req.body?.databases_id;
    databaseByPk.level = req.body?.level;
    await databaseByPk.save();
    res.json(databaseByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTestsDatabase = async (req, res) => {
  try {
    await tests_databases.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
