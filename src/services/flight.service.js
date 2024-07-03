const {
  FlightRepository,
  AirplaneRepository,
} = require("../repository/index.repository");
const CrudService = require("./crud.service");
const { helper } = require("../utils/index.util");

class FlightService extends CrudService {
  constructor() {
    const flightRepository = new FlightRepository();
    super(flightRepository);
    this.flightRepository = flightRepository;
    this.airplaneRepository = new AirplaneRepository();
  }

  async create(data) {
    try {
      helper.validateFlightTimes(data.departureTime, data.arrivalTime);

      const airplane = await this.airplaneRepository.get(data.airplaneId);

      const flight = await this.flightRepository.create({
        ...data,
        availableSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong: Service: createFlight");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      const flights = await this.flightRepository.getAll(filter);
      return flights;
    } catch (error) {
      console.log("Something went wrong: Service: getAllFlights");
      throw { error };
    }
  }
}

module.exports = FlightService;
