'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [{
      name: 'Orange',
      image: '/images/colors/color_1.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Silver',
      image: '/images/colors/color_2.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Light Blue',
      image: '/images/colors/color_3.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Blue',
      image: '/images/colors/color_4.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Purple',
      image: '/images/colors/color_5.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pink',
      image: '/images/colors/color_6.svg',
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
