const { AirportRepository } = require("../repository/index.repository");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.airportRepository.createAirport({
        name: data.name,
        cityId: data.cityId,
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong: Service: createAirport");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.airportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong: Service: deleteAirport");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (error) {
      console.log("Something went wrong: Service: updateAirport");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong: Service: getAirport");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      const airports = await this.airportRepository.getAllAirports({
        name: filter.name,
      });
      return airports;
    } catch (error) {
      console.log("Something went wrong: Service: getAllAirports");
      throw { error };
    }
  }

  
}

module.exports = AirportService;
