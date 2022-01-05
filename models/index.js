const Sequelize = require("sequelize");

const sequelize = new Sequelize("users_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const models = {};

models.users = require("./users")(sequelize);
models.departements = require("./departements")(sequelize);

models.departements.hasMany(models.users);

sequelize.sync({ force: false });

module.exports = models;
