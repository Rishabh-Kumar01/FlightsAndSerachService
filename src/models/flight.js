"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
      });

      Flight.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
        as: "departureAirport",
      });

      Flight.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
        as: "arrivalAirport",
      });
    }
  }
  Flight.init(
    {
      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      boardingGate: DataTypes.STRING,
      availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
