import models from '../models/index.js';

export const getAllDepartements = async (req, res) => {
  try {
    const departements = await models.departements.findAll();
    return res.status(200).render('new', {
      departements,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const createDepartement = async (req, res) => {
  const { nomDepartement, description } = req.body;
  try {
    await models.departements.create({ nomDepartement, description });
    return res.status(200).redirect('/');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const getDepartement = (req, res) => {
  console.log('getdepartement');
};
export const updateDepartement = (req, res) => {
  console.log('updatedepartement');
};
export const deleteDepartement = (req, res) => {
  console.log('deletedepartement');
};
