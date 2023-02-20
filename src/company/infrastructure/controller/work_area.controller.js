import { work_areas } from "../../application/model/work_area.model.js";

export const getWorkAreas = async (req, res) => {
  try {
    const workArea = await work_areas.findAll();
    res.json(workArea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkArea = async (req, res) => {
  try {
    const workAreaById = await work_areas.findByPk(req.params.id);
    if (!workAreaById)
      return res.status(404).json({ message: "El área de trabajo no existe" });
    res.json(workAreaById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkArea = async (req, res) => {
  try {
    const newWorkArea = await work_areas.create({
      name: req.body.name,
    });
    res.json(newWorkArea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkArea = async (req, res) => {
  try {
    const workAreaByPk = await work_areas.findByPk(req.params.id);
    workAreaByPk.name = req.body?.name;
    await workAreaByPk.save();
    res.json(workAreaByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkArea = async (req, res) => {
  try {
    await work_areas.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
