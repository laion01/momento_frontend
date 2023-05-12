'use strict';
const {
  Model
} = require('sequelize');

import bcryptjs from "bcryptjs"
const SALT_ROUND = 10;

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async emailTaken(email) {
      return email && (await User.findOne({ where: { email } })) ? true : false
    }
  
    async checkPassword(password) {
      return (
        this.password !== null &&
        (await bcryptjs.compare(password, this.password))
      )
    }

    async setPassword(password) {
      this.password =
        password !== null && password !== undefined
          ? await bcryptjs.hash(password, SALT_ROUND)
          : null
    }

    static associate(models) {
      // define association here
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    apartment: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};