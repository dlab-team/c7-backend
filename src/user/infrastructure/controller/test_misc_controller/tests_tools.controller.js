import { tests_tools } from "../../../application/model/tests_misc_model/tests_tools.model.js";

export const getTestsTools = async (req, res) => {
  try {
    const testsTools = await tests_tools.findAll();
    res.json(testsTools);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTestsTool = async (req, res) => {
  try {
    const testsToolById = await tests_tools.findByPk(req.params.id);
    if (!testsToolById)
      return res.status(404).json({ message: "El tool de Tests no existe" });
    res.json(testsToolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTestsTool = async (req, res) => {
  try {
    const newTestsTool = await tests_tools.create({
      test_id: req.body.test_id,
      tools_id: req.body.tools_id,
      level: req.body.level,
    });
    res.json(newTestsTool);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTestsTool = async (req, res) => {
  try {
    const toolByPk = await tests_tools.findByPk(req.params.id);
    toolByPk.test_id = req.body?.test_id;
    toolByPk.tools_id = req.body?.tools_id;
    toolByPk.level = req.body?.level;
    await toolByPk.save();
    res.json(toolByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTestsTool = async (req, res) => {
  try {
    await tests_tools.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
