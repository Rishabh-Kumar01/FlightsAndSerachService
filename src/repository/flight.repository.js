const { Flight, Airport, City, Airplane } = require("../models/index");
const { Op } = require("../utils/imports.util").sequelize;
const CrudRepository = require("./crud.repository");

class FlightRepository extends CrudRepository {
  constructor() {
    if (FlightRepository.instance) {
      return FlightRepository.instance;
    }
    super(Flight);
    FlightRepository.instance = this;
  }

  #createFlight(data) {
    const filter = {
      ...(data.arrivalAirportId && { arrivalAirportId: data.arrivalAirportId }),
      ...(data.departureAirportId && {
        departureAirportId: data.departureAirportId,
      }),
      ...(data.airplaneId && { airplaneId: data.airplaneId }),
      ...(data.departureTime && { departureTime: data.departureTime }),
      ...(data.arrivalTime && { arrivalTime: data.arrivalTime }),
      ...(data.availableSeats && { availableSeats: data.availableSeats }),
    };

    if (data.minPrice && data.maxPrice) {
      filter.price = {
        [Op.between]: [data.minPrice, data.maxPrice],
      };
    } else if (data.minPrice) {
      filter.price = {
        [Op.gte]: data.minPrice,
      };
    } else if (data.maxPrice) {
      filter.price = {
        [Op.lte]: data.maxPrice,
      };
    }

    return filter;
  }

  async getAll(filter) {
    try {
      const filterObject = this.#createFlight(filter);

      const flights = await Flight.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong: Flight Repository: getAll");
      throw { error };
    }
  }

  async get(id) {
    try {
      const flight = await Flight.findByPk(id, {
        include: [
          Airplane,
          { model: Airport, as: "departureAirport" },
          { model: Airport, as: "arrivalAirport" },
        ],
      });
      const flightData = flight.get({ plain: true });
      console.log(flightData);
      return {
        flightNumber: flightData.flightNumber,
        airplane: flightData.Airplane ? flightData.Airplane.modelNumber : null,
        departureAirport: flightData.departureAirport
          ? flightData.departureAirport.name
          : null,
        arrivalAirport: flightData.arrivalAirport
          ? flightData.arrivalAirport.name
          : null,
        departureAirportId: flightData.departureAirportId,
        arrivalAirportId: flightData.arrivalAirportId,
        departureTime: flightData.departureTime,
        arrivalTime: flightData.arrivalTime,
        price: flightData.price,
        boardingGate: flightData.boardingGate,
        availableSeats: flightData.availableSeats,
        createdAt: flightData.createdAt,
        updatedAt: flightData.updatedAt,
      };
    } catch (error) {
      console.log("Something went wrong: Flight Repository: get");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
