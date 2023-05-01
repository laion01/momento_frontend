'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pathname: {
        type: Sequelize.STRING,
        defaultValue: '/images/colors/empty.svg',
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: 'IMAGE',
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
          as: 'productId',
        }
      },
      width: {
        type: Sequelize.INTEGER,
        defaultValue: 500,
      },
      height: {
        type: Sequelize.INTEGER,
        defaultValue: 500,
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
    await queryInterface.dropTable('Files');
  }
};