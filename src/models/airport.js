"use strict";

const { on } = require("nodemon");

const { Model } = require("../utils/index.util").imports.sequelize;
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City, {
        foreignKey: "cityId",
        as: "city",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Airport.hasMany(models.Flight, {
        foreignKey: "departureAirportId",
      });

      Airport.hasMany(models.Flight, {
        foreignKey: "arrivalAirportId",
      });
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cities",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Airport",
    }
  );
  return Airport;
};
