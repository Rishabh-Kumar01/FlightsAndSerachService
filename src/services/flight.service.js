const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.repository");
const { helper } = require("../utils/index.util");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {
      helper.validateFlightTimes(data.departureTime, data.arrivalTime);

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,

        availableSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong: Service: createFlight");
      throw { error };
    }
  }

  async getFlight(id) {
    try {
      const flight = await this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong: Service: getFlight");
      throw { error };
    }
  }

  async getAllFlights(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong: Service: getAllFlights");
      throw { error };
    }
  }
}

module.exports = FlightService;
