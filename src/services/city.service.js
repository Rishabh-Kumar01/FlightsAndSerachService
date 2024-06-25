const { CityRepository } = require("../repository/index.repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity({ name: data.name });
      return city;
    } catch (error) {
      console.log("Something went wrong: Service: createCity");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity();
      return response;
    } catch (error) {
      console.log("Something went wrong: Service: deleteCity");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong: Service: updateCity");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong: Service: getCity");
      throw { error };
    }
  }
}

module.exports = CityService;
