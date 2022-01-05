const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Departements = sequelize.define("departements", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomDepartement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});
 
module.exports = Departements;
