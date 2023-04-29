'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, {
        foreignKey: {
          name: 'product_id'
        }
      })
    }
  }
  File.init({
    pathname: DataTypes.STRING,
    type: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};


// pathname: {
// type: {
// product_id: {
// width: {
// height: {