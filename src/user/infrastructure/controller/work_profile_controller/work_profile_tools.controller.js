import { work_profile_tools } from "../../../application/model/work_profile_misc_model/work_profile_tools.model.js";

export const getWorkProfileTools = async (req, res) => {
  try {
    const workProfileTool = await work_profile_tools.findAll();
    res.json(workProfileTool);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorkProfileTool = async (req, res) => {
  try {
    const workProfileToolById = await work_profile_tools.findByPk(
      req.params.id
    );
    if (!workProfileToolById)
      return res
        .status(404)
        .json({ message: "El tool del perfil de trabajo no existe" });
    res.json(workProfileToolById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorkProfileTool = async (req, res) => {
  try {
    const newWorkProfileTool = await work_profile_tools.create({
      work_profile_id: req.body.work_profile_id,
      tool_id: req.body.tool_id,
    });
    res.json(newWorkProfileTool);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateWorkProfileTool = async (req, res) => {
  try {
    const toolByPk = await work_profile_tools.findByPk(req.params.id);
    toolByPk.work_profile_id = req.body?.work_profile_id;
    toolByPk.tool_id = req.body?.tool_id;
    await toolByPk.save();
    res.json(toolByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteWorkProfileTool = async (req, res) => {
  try {
    await work_profile_tools.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
