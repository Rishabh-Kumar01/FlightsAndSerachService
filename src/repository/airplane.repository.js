const { Airplane } = require("../models/index");

class AirplaneRepository {
  constructor() {
    if (AirplaneRepository.instance) {
      return AirplaneRepository.instance;
    }

    AirplaneRepository.instance = this;
  }

  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong: Repository: getAirplane");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
