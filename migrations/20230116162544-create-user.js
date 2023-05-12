'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      country: {
        type: Sequelize.STRING,
        defaultValue: '{}',
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: '{}',
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
      avatar: {
        type: Sequelize.STRING,
        defaultValue: "/images/avatar.svg",
      },
      role: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
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
    await queryInterface.dropTable('Users');
  }
};