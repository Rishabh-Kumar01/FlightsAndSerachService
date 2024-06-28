"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "airports",
      [
        {
          name: "Indira Gandhi International Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "Palam, Delhi, India",
        },
        {
          name: "Kempegowda International Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "Bangalore, Karnataka, India",
        },
        {
          name: "Mysuru Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "Mysuru, Karnataka, India",
        },
        {
          name: "Hubli Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: " 934M+VWX, Gokul Rd, Gandhi Nagar, Hubballi, Karnataka",
        },
        {
          name: "Pandit Deen Dayal Upadhyay Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "Agra, Uttar Pradesh, India",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
