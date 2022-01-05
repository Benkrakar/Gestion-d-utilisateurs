const sequelize = require("../config/db");
const models = {};

models.sequelize = sequelize

models.users = require("./users")
models.departements = require("./departements")

models.departements.hasMany(models.users);

module.exports = models