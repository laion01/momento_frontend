'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      locket_id: 1,
      metal_id: 1,
      color_id: 2,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      locket_id: 1,
      metal_id: 3,
      color_id: 1,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      locket_id: 2,
      metal_id: 3,
      color_id: 2,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      locket_id: 2,
      metal_id: 1,
      color_id: 1,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
