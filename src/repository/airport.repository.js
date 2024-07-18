const CrudRepository = require("./crud.repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  async bulkInsertAirports(data) {
    try {
      const airports = await Airport.bulkCreate(data);
      console.log(airports, "airports");
      return airports;
    } catch (error) {
      console.log("Something went wrong: Repository: bulkInsertAirports");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
