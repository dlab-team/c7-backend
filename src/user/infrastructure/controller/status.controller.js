import { status } from "../../application/model/status.model.js";
import { users } from "../../application/model/user.model.js";

export const getStatuses = async (req, res) => {
  try {
    const statuses = await status.findAll();
    res.json(statuses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const statusById = await status.findByPk(req.params.id);
    if (!statusById)
      return res.status(404).json({ message: "El estado no existe" });
    res.json(statusById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStatusUsers = async (req, res) => {
  try {
    const usersInStatus = await users.findAll({
      where: { status_id: req.params.id },
    });
    return res.json(usersInStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createStatus = async (req, res) => {
  try {
    const newStatus = await status.create({
      name: req.body.name.toUpperCase(),
    });
    res.json(newStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const statusByPk = await status.findByPk(req.params.id);
    statusByPk.name = req.body?.name.toUpperCase();
    await statusByPk.save();
    res.json(statusByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteStatus = async (req, res) => {
  try {
    await status.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
