require("dotenv").config();
const Sequelize = require("sequelize");

const host = process.env.DATABASE_HOST;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
});

const models = {};

models.users = require("./users")(sequelize);
models.departements = require("./departements")(sequelize);

models.departements.hasMany(models.users);

sequelize.sync({ force: false });

module.exports = models;
