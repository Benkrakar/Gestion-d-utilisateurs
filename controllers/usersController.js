import models from '../models/index.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await models.users.findAll({
      include: [models.departements],
    });
    return res.status(200).render('index', {
      home: true,
      users,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const createUser = async (req, res) => {
  const { nomComplet, email, password, departementId } = req.body;
  console.log(req.body);
  try {
    await models.users.create({ nomComplet, email, password, departementId });
    return res.status(200).redirect('/users');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateUser = (req, res) => {
  console.log('updateUser');
};
export const deleteUser = async (req, res) => {
  try {
    await models.users.destroy({ where: { id: req.params.id } });
    return res.status(200).redirect('/users');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
