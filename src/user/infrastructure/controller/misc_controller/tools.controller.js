import { tools } from "../../../application/model/misc_model/tools.model.js";

export const getTools = async (req, res) => {
  try {
    const tools_ = await tools.findAll();
    res.json(tools_);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTool = async (req, res) => {
  try {
    const toolById = await tools.findByPk(req.params.id);
    if (!toolById)
      return res.status(404).json({ message: "El tool no existe" });
    res.json(toolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTool = async (req, res) => {
  try {
    const newTool = await tools.create({
      name: req.body.name,
    });
    res.json(newTool);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTool = async (req, res) => {
  try {
    const toolByPk = await tools.findByPk(req.params.id);
    toolByPk.name = req.body?.name;
    await toolByPk.save();
    res.json(toolByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTool = async (req, res) => {
  try {
    await tools.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
