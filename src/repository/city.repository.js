const { City } = require("../models/index");

class CityRepository {
  constructor() {
    if (CityRepository.instance) {
      return CityRepository.instance;
    }
    CityRepository.instance = this;
  }

  async createCity({ name }) {
    try {
      const city = await City.create({ name: name });
      return city;
    } catch (error) {
      console.log("Something went wrong: Repository: createCity");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("Something went wrong: Repository: deleteCity");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong: Repository: updateCity");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong: Repository: getCity");
      throw { error };
    }
  }
}

module.exports = CityRepository;
