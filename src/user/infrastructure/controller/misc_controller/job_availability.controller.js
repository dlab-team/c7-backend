import { job_availability_model } from "../../../application/model/misc_model/job_availability.model.js";

export const getJobAvailabilities = async (req, res) => {
  try {
    const jobAvailabilities = await job_availability_model.findAll();
    res.json(jobAvailabilities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getJobAvailiability = async (req, res) => {
  try {
    const jobAvailabilityById = await job_availability_model.findByPk(
      req.params.id
    );
    if (!jobAvailabilityById)
      return res.status(404).json({ message: "El job_availability no existe" });
    res.json(jobAvailabilityById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createJobAvailability = async (req, res) => {
  try {
    const newJobAvailability = await job_availability_model.create({
      name: req.body.name,
    });
    res.json(newJobAvailability);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateJobAvailability = async (req, res) => {
  try {
    const jobAvailabilityByPk = await job_availability_model.findByPk(
      req.params.id
    );
    jobAvailabilityByPk.name = req.body?.name;
    await jobAvailabilityByPk.save();
    res.json(jobAvailabilityByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteJobAvailability = async (req, res) => {
  try {
    await job_availability_model.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
