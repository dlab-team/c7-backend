import { job_options_model } from "../../../application/model/misc_model/job_options.model.js";

export const getJobOptions = async (req, res) => {
  try {
    const job_options = await job_options_model.findAll();
    res.json(job_options);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getJobOption = async (req, res) => {
  try {
    const jobOptionById = await job_options_model.findByPk(req.params.id);
    if (!jobOptionById)
      return res.status(404).json({ message: "El job_option no existe" });
    res.json(jobOptionById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createJobOption = async (req, res) => {
  try {
    const newJobOption = await job_options_model.create({
      name: req.body.name,
    });
    res.json(newJobOption);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateJobOption = async (req, res) => {
  try {
    const jobOptionByPk = await job_options_model.findByPk(req.params.id);
    jobOptionByPk.name = req.body?.name;
    await jobOptionByPk.save();
    res.json(jobOptionByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDatabase = async (req, res) => {
  try {
    await job_options_model.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
