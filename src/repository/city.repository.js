const { City, Airport } = require("../models/index");
const { Op } = require("../utils/index.util").imports.sequelize;
const CrudRepository = require("./crud.repository");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
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

  async getAll(filter) {
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
      console.log("Something went wrong:City Repository: getAll");
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
