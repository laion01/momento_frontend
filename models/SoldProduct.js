'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class SoldProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      SoldProduct.belongsTo(models.Order, {
        foreignKey: {
          name: 'orderId',
        }
      })

      SoldProduct.belongsTo(models.Product, {
        foreignKey: {
          name: 'productId',
          as: 'product'
        }
      })
    }
  }
  SoldProduct.init({
    userId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productCode: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'SoldProduct',
  });
  return SoldProduct;
};