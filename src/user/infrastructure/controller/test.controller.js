import { test } from "../../application/model/test.model.js";

export const getTests = async (req, res) => {
  try {
    const test_ = await test.findAll();
    res.json(test_);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTest = async (req, res) => {
  try {
    const testById = await test.findByPk(req.params.id);
    if (!testById)
      return res.status(404).json({ message: "El test no existe" });
    res.json(testById);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTest = async (req, res) => {
  try {
    const newTest = await test.create({
      name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
      image: req.body.image,
      description:
        req.body.description.charAt(0).toUpperCase() +
        req.body.description.slice(1),
      duration: req.body.duration,
      link: req.body.link,
      status: req.body.status.toUpperCase(),
    });
    res.json(newTest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTest = async (req, res) => {
  try {
    const testByPk = await test.findByPk(req.params.id);
    testByPk.name =
      req.body?.name.charAt(0).toUpperCase() + req.body?.name.slice(1);
    testByPk.image = req.body?.image;
    testByPk.description =
      req.body?.description.charAt(0).toUpperCase() +
      req.body?.description.slice(1);
    testByPk.duration = req.body?.duration;
    testByPk.link = req.body?.link;
    testByPk.status = req.body?.status;
    await testByPk.save();
    res.json(testByPk);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTest = async (req, res) => {
  try {
    await test.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
