import models from '../models/index.js';

export const getAllUsers = async (req, res) => {
  try {
    const departements = await models.departements.findAll();
    const users = await models.users.findAll({
      include: [models.departements],
    });
    return res.status(200).render('index', {
      home: true,
      users,
      departements,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const createUser = async (req, res) => {
  const { nomComplet, email, password, departementId } = req.body;
  try {
    await models.users.create({ nomComplet, email, password, departementId });
    return res.status(200).redirect('/');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const getUser = async (req, res) => {
  const departements = await models.departements.findAll();

  try {
    const user = await models.users.findByPk(req.params.id, {
      include: [models.departements],
    });
    if (user === null) {
      return res.redirect('/');
    }
    return res.status(200).render('new', {
      user,
      departements,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const updateUser = async (req, res) => {
  const { nomComplet, email, password, departementId } = req.body;
  try {
    await models.users.update(
      { nomComplet, email, password, departementId },

      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).redirect('/');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await models.users.destroy({ where: { id: req.params.id } });
    return res.status(200).redirect('/');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
