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
      this.hasMany(models.File, {
        foreignKey: 'product_id'
      })
      models.File.belongsTo(this)
    }
  }
  Product.init({
    locket_id: DataTypes.INTEGER,
    metal_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });



  return Product;
};