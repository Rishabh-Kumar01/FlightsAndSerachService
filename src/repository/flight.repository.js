const { Flight } = require("../models/index");

class FlightRepository {
  constructor() {
    if (FlightRepository.instance) {
      return FlightRepository.instance;
    }

    FlightRepository.instance = this;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong: Repository: createFlight");
      throw { error };
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flight.findByPk(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong: Repository: getFlight");
      throw { error };
    }
  }

  async getAllFlights() {
    try {
        const flights = await Flight.findAll();
    } catch (error) {
        
    }
  }
}

module.exports = FlightRepository;
