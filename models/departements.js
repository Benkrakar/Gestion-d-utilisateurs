const {  DataTypes } = require("sequelize");

const Departements = (sequelize) =>
  sequelize.define("departements", {
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
