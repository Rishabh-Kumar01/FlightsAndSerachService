const { CityRepository } = require("../repository/index.repository");
const CrudService = require("./crud.service");

class CityService extends CrudService {
  constructor() {
    const cityRepository = new CityRepository();
    super(cityRepository);
    this.cityRepository = cityRepository;
  }

  async bulkInsertCities(data) {
    try {
      const cities = await this.cityRepository.bulkInsertCities(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong: Service: bulkInsertCities");
      throw { error };
    }
  }

  async getAll(filter) {
    try {
      const cities = await this.cityRepository.getAll({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Something went wrong: City Service: getAll");
      throw { error };
    }
  }

  async getAirportsByCity(cityId) {
    try {
      const cityAirports = await this.cityRepository.getAirportsByCity(cityId);
      return cityAirports;
    } catch (error) {
      console.log("Something went wrong: Service: getAirportsByCity");
      throw { error };
    }
  }
}

module.exports = CityService;
