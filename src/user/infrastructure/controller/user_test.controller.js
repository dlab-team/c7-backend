import { user_test } from "../../application/model/user_test.model.js";

export const getUserTests = async (req, res) => {
  try {
    const userTests = await user_test.findAll();
    res.json(userTests);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserTest = async (req, res) => {
  try {
    const userTestById = await user_test.findByPk(req.params.id);
    if (!userTestById)
      return res.status(404).json({ message: "El test del usuario no existe" });
    res.json(userTestById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUserTest = async (req, res) => {
  try {
    const newUserTest = await user_test.create({
      test_id: req.body.test_id,
      user_id: req.body.user_id,
    });
    res.json(newUserTest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserTest = async (req, res) => {
  try {
    const userTestByPk = await user_test.findByPk(req.params.id);
    userTestByPk.test_id = req.body?.test_id;
    userTestByPk.user_id = req.body?.user_id;
    await userTestByPk.save();
    res.json(userTestByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUserTest = async (req, res) => {
  try {
    await user_test.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
