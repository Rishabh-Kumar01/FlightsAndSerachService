const { Airport } = require("../models/index");

class AirportRepository {
  constructor() {
    if (AirportRepository.instance) {
      return AirportRepository.instance;
    }
    AirportRepository.instance = this;
  }

  async createAirport({ name, cityId }) {
    try {
      const airport = await Airport.create({ name: name, cityId: cityId });
      return airport;
    } catch (error) {
      console.log("Something went wrong: Repository: createAirport");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
    } catch (error) {
      console.log("Something went wrong: Repository: deleteAirport");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);
      airport.name = data.name;
      airport.cityId = data.cityId;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong: Repository: updateAirport");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong: Repository: getAirport");
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      if (filter.name) {
        const airports = await Airport.findAll({
          where: {
            name: filter.name,
          },
        });
        return airports;
      } else {
        const airports = await Airport.findAll();
        return airports;
      }
    } catch (error) {
      console.log("Something went wrong: Repository: getAllAirports");
      throw { error };
    }
  }

  
}

module.exports = AirportRepository;
