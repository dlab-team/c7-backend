import { users } from "../../application/model/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const user = await users.findAll();
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userById = await users.findByPk(req.params.id);
    if (!userById)
      return res.status(404).json({ message: "El usuario no existe" });
    res.json(userById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await users.create({
      name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
      last_name:
        req.body.last_name.charAt(0).toUpperCase() +
        req.body.last_name.slice(1),
      email: req.body.email,
      password: req.body.password,
      rol_id: req.body.rol_id,
      status_id: req.body.status_id,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userByPk = await users.findByPk(req.params.id);
    userByPk.name =
      req.body?.name.charAt(0).toUpperCase() + req.body?.name.slice(1);
    userByPk.last_name =
      req.body?.last_name.charAt(0).toUpperCase() +
      req.body?.last_name.slice(1);
    userByPk.email = req.body?.email;
    userByPk.password = req.body?.password;
    userByPk.rol_id = req.body?.rol_id;
    userByPk.status_id = req.body?.status_id;
    await userByPk.save();
    res.json(userByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
