const { City, Airport } = require("../models/index");
const { Op } = require("../utils/index.util").imports.sequelize;

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

  async bulkInsertCities(data) {
    try {
      const cities = await City.bulkCreate(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong: Repository: bulkInsertCities");
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
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
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

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }

      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong: Repository: getAllCities");
      throw { error };
    }
  }

  async getAirportsByCity(cityId) {
    try {
      const city = await City.findByPk(cityId, {
        include: {
          model: Airport,
          as: "airports",
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong: Repository: getAirportsByCity");
      throw { error };
    }
  }
}

module.exports = CityRepository;
