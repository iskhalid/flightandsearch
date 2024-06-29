'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //  await queryInterface.bulkInsert('Airports', [
  //   {
  //     name: 'Chitwan airport',
  //     cityId: 8,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     name: 'A airport',
  //     cityId: 8,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     name: 'B airport',
  //     cityId: 8,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     name: 'Pokhara airport',
  //     cityId: 1,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }
  // ], {});
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
