'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      lastName: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      country: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      apartment: {
        type: Sequelize.STRING,
        defaultValue: '',
      }, 
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      zipcode: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};