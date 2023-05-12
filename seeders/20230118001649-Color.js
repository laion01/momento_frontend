'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [{
      name: 'Yellow Zirconia',
      image: '/images/colors/color_1.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Zirconia',
      image: '/images/colors/color_2.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Topaz',
      image: '/images/colors/color_3.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Saphire',
      image: '/images/colors/color_4.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Amethyst',
      image: '/images/colors/color_5.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pink Zirconia',
      image: '/images/colors/color_6.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Turpuoise',
      image: '/images/colors/color_11.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Opal',
      image: '/images/colors/color_12.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Black Onyx',
      image: '/images/colors/color_13.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Rhodochrosite',
      image: '/images/colors/color_14.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Malachite',
      image: '/images/colors/color_15.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lapis Lazuli',
      image: '/images/colors/color_16.svg',
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
