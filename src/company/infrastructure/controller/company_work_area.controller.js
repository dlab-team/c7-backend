import { company_work_area } from "../../application/model/company_work_area.model.js";

export const getCompanyWorkAreas = async (req, res) => {
  try {
    const companyWorkArea = await company_work_area.findAll();
    res.json(companyWorkArea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCompanyWorkArea = async (req, res) => {
  try {
    const companyWorkAreaById = await company_work_area.findByPk(req.params.id);
    if (!companyWorkAreaById)
      return res
        .status(404)
        .json({ message: "El área de trabajo de la compañía no existe" });
    res.json(companyWorkAreaById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCompanyWorkArea = async (req, res) => {
  try {
    const newCompanyWorkArea = await company_work_area.create({
      company_id: req.body.company_id,
      work_area_id: req.body.work_area_id,
    });
    res.json(newCompanyWorkArea);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCompanyWorkArea = async (req, res) => {
  try {
    const companyWorkAreaByPk = await company_work_area.findByPk(req.params.id);
    companyWorkAreaByPk.company_id = req.body?.company_id;
    companyWorkAreaByPk.work_area_id = req.body?.work_area_id;
    await companyWorkAreaByPk.save();
    res.json(companyWorkAreaByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCompanyWorkArea = async (req, res) => {
  try {
    await company_work_area.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
