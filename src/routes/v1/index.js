const {
  CityController,
  AirportController,
  FlightController,
} = require("../../controllers/index.controller");
const { FlightMiddleware } = require("../../middlewares/index.middleware");
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
router.post("/airports", AirportController.create);

/**
 * Request Method - POST
 * Route - api/v1/airports/bulk-insert
 * Summary : Create multiple airports
 */
router.post("/airports/bulk-insert", AirportController.bulkInsertAirports);

/**
 * Request Method - DELETE
 * Route - api/v1/airport/:id
 * Summary : Delete a airport
 */
router.delete("/airports/:id", AirportController.delete);

/**
 * Request Method - PATCH
 * Route - api/v1/airport/:id
 * Summary : Update a airport
 */
router.patch("/airports/:id", AirportController.update);

/**
 * Request Method - GET
 * Route - api/v1/airport/:id
 * Summary : Get a airport
 */
router.get("/airports/:id", AirportController.get);

/**
 * Request Method - GET
 * Route - api/v1/city
 * Summary : Get all cities with filter - name
 */
router.get("/city", AirportController.getAll);

// Flights Routes

/**
 * Request Method - POST
 * Route - api/v1/flights
 * Summary : Create a new flight
 */
router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.createFlight
);

/**
 * Request Method - DELETE
 * Route - api/v1/flights/:id
 * Summary : Delete a flight
 */
router.delete("/flights/:id", FlightController.deleteFlight);

/**
 * Request Method - PATCH
 * Route - api/v1/flights/:id
 * Summary : Update a flight
 */
router.patch(
  "/flights/:id",
  FlightMiddleware.validateUpdateFlight,
  FlightController.updateFlight
);

/**
 * Request Method - GET
 * Route - api/v1/flights/:id
 * Summary : Get a flight
 */
router.get("/flights/:id", FlightController.getFlight);

/**
 * Request Method - GET
 * Route - api/v1/flights
 * Summary : Get all flights with filters
 */
router.get("/flights", FlightController.getAllFlights);

module.exports = router;
