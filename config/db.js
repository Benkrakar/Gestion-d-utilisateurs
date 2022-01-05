const Sequelize = require("sequelize");

const sequelize = new Sequelize("users_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
