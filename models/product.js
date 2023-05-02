'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.File, {
        foreignKey: 'productId',
      })
      Product.belongsTo(models.Metal, {
        foreignKey: {
          name: 'metalId',
        }
      })
      Product.belongsTo(models.Color, {
        foreignKey: {
          name: 'colorId',
        }
      })
      Product.belongsTo(models.Locket, {
        foreignKey: {
          name: 'locketId',
        }
      })
    }
  }
  Product.init({
    locketId: DataTypes.INTEGER,
    metalId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });



  return Product;
};