"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Airports",
          key: "id",
        },
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Airports",
          key: "id",
        },
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Airplanes",
          key: "id",
        },
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      boardingGate: {
        type: Sequelize.STRING,
      },
      availableSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
