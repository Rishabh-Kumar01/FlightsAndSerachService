const { AirportRepository } = require("../repository/index.repository");
const CrudService = require("./crud.service");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
    this.airportRepository = airportRepository;
  }

  async bulkInsertAirports(data) {
    try {
      const airports = await this.airportRepository.bulkInsertAirports(data);
      return airports;
    } catch (error) {
      console.log("Something went wrong: Service: bulkInsertAirports");
      throw { error };
    }
  }
}

module.exports = AirportService;
