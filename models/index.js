import 'dotenv/config';
import Sequelize from 'sequelize';
import users from './users.js';
import departements from './departements.js';

const host = process.env.DATABASE_HOST;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
});

const models = {};
models.users = users(sequelize);
models.departements = departements(sequelize);

models.departements.hasMany(models.users);

sequelize.sync({ force: false });
export default models;
