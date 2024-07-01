const {
  CityController,
  AirportController,
} = require("../../controllers/index.controller");
const router = require("../../utils/imports.util").express.Router();

// City Routes

/**
 * Request Method - POST
 * Route - api/v1/city
 * Summary : Create a new city
 */
router.post("/city", CityController.create);

/**
 * Request Method - POST
 * Route - api/v1/city/bulk-insert
 * Summary : Create multiple cities
 */
router.post("/city/bulk-insert", CityController.bulkInsert);

/**
 * Request Method - DELETE
 * Route - api/v1/city/:id
 * Summary : Delete a city
 */
router.delete("/city/:id", CityController.delete);

/**
 * Request Method - PATCH
 * Route - api/v1/city/:id
 * Summary : Update a city
 */
router.patch("/city/:id", CityController.update);

/**
 * Request Method - GET
 * Route - api/v1/city/:id
 * Summary : Get a city
 */
router.get("/city/:id", CityController.get);

/**
 * Request Method - GET
 * Route - api/v1/city
 * Summary : Get all cities with filter - name
 */
router.get("/city", CityController.getAll);

/**
 * Request Method - GET
 * Route - api/v1/city/:id/airports
 * Summary : Get all airports of a city
 */
router.get("/city/:id/airports", CityController.getAirports);



// Airport Routes

/**
 * Request Method - POST
 * Route - api/v1/airport
 * Summary : Create a new airport
 */
router.post("/airport", AirportController.create);

/**
 * Request Method - DELETE
 * Route - api/v1/airport/:id
 * Summary : Delete a airport
 */
router.delete("/airport/:id", AirportController.delete);

/**
 * Request Method - PATCH
 * Route - api/v1/airport/:id
 * Summary : Update a airport
 */
router.patch("/airport/:id", AirportController.update);

/**
 * Request Method - GET
 * Route - api/v1/airport/:id
 * Summary : Get a airport
 */
router.get("/airport/:id", AirportController.get);

/**
 * Request Method - GET
 * Route - api/v1/city
 * Summary : Get all cities with filter - name
 */
router.get("/city", AirportController.getAll);

module.exports = router;
