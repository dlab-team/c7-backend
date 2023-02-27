import { company_work_area } from "../../application/model/company_work_area.model.js";
import { contact_company } from "../../application/model/contact_company.model.js";

export const getContactCompanies = async (req, res) => {
  try {
    const contactCompany = await contact_company.findAll();
    res.json(contactCompany);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getContactCompany = async (req, res) => {
  try {
    const contactCompanyById = await contact_company.findByPk(req.params.id);
    if (!contactCompanyById)
      return res.status(404).json({ message: "El contacto no existe" });
    res.json(contactCompanyById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContactCompany = async (req, res) => {
  try {
    const newContactCompany = await contact_company.create({
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      company_name: req.body.company_name,
      doubts: req.body.doubts,
    });
    res.json(newContactCompany);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateContactCompany = async (req, res) => {
  try {
    const contactCompanyByPk = await contact_company.findByPk(req.params.id);
    contactCompanyByPk.name = req.body?.name;
    contactCompanyByPk.last_name = req.body?.last_name;
    contactCompanyByPk.email = req.body?.email;
    contactCompanyByPk.phone = req.body?.phone;
    contactCompanyByPk.company_name = req.body?.company_name;
    contactCompanyByPk.doubts = req.body?.doubts;
    await contactCompanyByPk.save();
    res.json(contactCompanyByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteContactCompany = async (req, res) => {
  try {
    await contact_company.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCompanyWorkAreaInContactCompany = async (req, res) => {
  try {
    const companyWorkAreaInContactCompany = company_work_area.findAll({
      where: { company_id: req.params.id },
    });
    return res.json(companyWorkAreaInContactCompany);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
