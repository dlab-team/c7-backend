import { current_job_status } from "../../application/model/current_job_status.model.js";

export const getCurrentJobStatuses = async (req, res) => {
  try {
    const currentJobStatuses = await current_job_status.findAll();
    res.json(currentJobStatuses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCurrentJobStatus = async (req, res) => {
  try {
    const currentJobStatusById = await current_job_status.findByPk(
      req.params.id
    );
    if (!currentJobStatusById)
      return res
        .status(404)
        .json({ message: "El current_job_status no existe" });
    res.json(currentJobStatusById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCurrentJobStatus = async (req, res) => {
  try {
    const newCurrentJobStatus = await current_job_status.create({
      job_status: req.body.job_status.toUpperCase(),
    });
    res.json(newCurrentJobStatus);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCurrentJobStatus = async (req, res) => {
  try {
    const currentJobStatusByPk = await current_job_status.findByPk(
      req.params.id
    );
    currentJobStatusByPk.job_status = req.body?.job_status.toUpperCase();
    await currentJobStatusByPk.save();
    res.json(currentJobStatusByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCurrentJobStatus = async (req, res) => {
  try {
    await current_job_status.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
