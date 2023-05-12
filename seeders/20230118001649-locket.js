'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lockets', [{
      name: 'With You Always Photo Album',
      type: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'With You Always Photo Album',
      type: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Our Loving Memories Photo Album',
      type: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Our Loving Memories Photo Album',
      type: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Momento Diamond (MD-23W)',
      type: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Momento Diamond (MD-28W)',
      type: 3,
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
