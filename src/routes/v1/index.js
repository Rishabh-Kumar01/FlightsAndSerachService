const { CityController } = require("../../controllers/index.controller");
const router = require("../../utils/imports.util").express.Router();

// City Routes

/**
 * Request Method - POST
 * Route - api/v1/city
 * Summary : Create a new city
 */
router.post("/city", CityController.create);

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



module.exports = router;
