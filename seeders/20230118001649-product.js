'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      locketId: 1,
      metalId: 1,
      colorId: 2,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      locketId: 1,
      metalId: 3,
      colorId: 1,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      locketId: 2,
      metalId: 3,
      colorId: 2,
      price: 120.0,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      locketId: 2,
      metalId: 1,
      colorId: 1,
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
