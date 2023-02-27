import { work_profile_databases } from "../../../application/model/work_profile_misc_model/work_profile_databases.model.js";

export const getWorkProfileDatabases = async (req, res) => {
  try {
    const workProfileDatabases = await work_profile_databases.findAll();
    res.json(workProfileDatabases);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkProfileDatabase = async (req, res) => {
  try {
    const workProfileDatabaseById = await work_profile_databases.findByPk(
      req.params.id
    );
    if (!workProfileDatabaseById)
      return res
        .status(404)
        .json({ message: "El database del perfil de trabajo no existe" });
    res.json(workProfileToolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkProfileDatabase = async (req, res) => {
  try {
    const newWorkProfileDatabase = await work_profile_databases.create({
      work_profile_id: req.body.work_profile_id,
      databases_id: req.body.databases_id,
      level: req.body.level,
    });
    res.json(newWorkProfileDatabase);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkProfileDatabase = async (req, res) => {
  try {
    const databaseByPk = await work_profile_databases.findByPk(req.params.id);
    databaseByPk.work_profile_id = req.body?.work_profile_id;
    databaseByPk.databasesid = req.body?.databases_id;
    databaseByPk.level = req.body?.level;
    await databaseByPk.save();
    res.json(databaseByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkProfileDatabase = async (req, res) => {
  try {
    await work_profile_databases.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
