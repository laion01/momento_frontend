'use strict';
const {
  Model
} = require('sequelize');

import bcryptjs from "bcryptjs"
const SALT_ROUND = 10;

module.exports = (sequelize, DataTypes) => {

  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  Address.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    city: DataTypes.STRING,
    apartment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};