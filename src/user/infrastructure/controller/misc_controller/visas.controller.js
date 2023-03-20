import { visas_model } from "../../../application/model/misc_model/visas.model.js";

export const getVisas = async (req, res) => {
  try {
    const visas = await visas_model.findAll();
    res.json(visas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVisa = async (req, res) => {
  try {
    const visaById = await visas_model.findByPk(req.params.id);
    if (!visaById)
      return res.status(404).json({ message: "La visa no existe" });
    res.json(visaById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createVisa = async (req, res) => {
  try {
    const newVisa = await visas_model.create({
      name: req.body.name,
    });
    res.json(newVisa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVisa = async (req, res) => {
  try {
    const visaByPk = await visas_model.findByPk(req.params.id);
    visaByPk.name = req.body?.name;
    await visaByPk.save();
    res.json(visaByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVisa = async (req, res) => {
  try {
    await visas_model.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
