'use strict';
const {
  Model
} = require('sequelize');

import bcryptjs from "bcryptjs"
const SALT_ROUND = 10;

module.exports = (sequelize, DataTypes) => {

  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Order.hasMany(models.SoldProduct, {
        foreignKey: 'orderId',
      })

      Order.belongsTo(models.Address, { 
        foreignKey: 'shippingAddressId',
        as: 'shippingAddress',
      })

      Order.belongsTo(models.Address, {
        foreignKey: 'billingAddressId',
        as: 'billingAddress'
      })

      Order.belongsTo(models.User, {
        foreignKey: 'userId',
      })
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    billingAddressId: DataTypes.INTEGER,
    shippingAddressId: DataTypes.INTEGER,
    shippingId: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT,
    pid: DataTypes.STRING, 
    status: DataTypes.INTEGER, 
    adminViewed: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};