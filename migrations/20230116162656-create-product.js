'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locketId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lockets',
          key: 'id',
          as: 'locketId',
        }
      },
      metalId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Metals',
          key: 'id',
          as: 'metalId',
        }
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
          as: 'colorId',
        }
      },
      price: {
        type: Sequelize.FLOAT,
      },
      amount: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Products');
  }
};