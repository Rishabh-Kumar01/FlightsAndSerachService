const { Airplane } = require("../models/index");
const CrudRepository = require("./crud.repository");

class AirplaneRepository extends CrudRepository {
  constructor() {
    if (AirplaneRepository.instance) {
      return AirplaneRepository.instance;
    }
    super(Airplane);
    AirplaneRepository.instance = this;
  }
}

module.exports = AirplaneRepository;
