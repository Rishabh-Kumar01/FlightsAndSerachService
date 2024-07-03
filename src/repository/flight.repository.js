const { Flight } = require("../models/index");
const { Op } = require("../utils/imports.util").sequelize;
const CrudRepository = require("./crud.repository");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
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
}

module.exports = FlightRepository;
