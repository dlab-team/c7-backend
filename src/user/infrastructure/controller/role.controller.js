import { role } from "../../application/model/role.model.js";
import { users } from "../../application/model/user.model.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await role.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRol = async (req, res) => {
  try {
    const rolById = await role.findByPk(req.params.id);
    if (!rolById) return res.status(404).json({ message: "El rol no existe" });
    res.json(rolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRoleUsers = async (req, res) => {
  try {
    const usersInRole = await users.findAll({
      where: { rol_id: req.params.id },
    });
    return res.json(usersInRole);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRoles = async (req, res) => {
  try {
    const newRol = await role.create({
      name: req.body.name.toUpperCase(),
    });
    res.json(newRol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRol = async (req, res) => {
  try {
    const rolByPk = await role.findByPk(req.params.id);
    rolByPk.name = req.body?.name.toUpperCase();
    await rolByPk.save();
    res.json(rolByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRol = async (req, res) => {
  try {
    await role.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
