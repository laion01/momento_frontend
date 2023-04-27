'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Metals', [{
      name: 'Silver',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Yellow Gold',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Silver',
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
