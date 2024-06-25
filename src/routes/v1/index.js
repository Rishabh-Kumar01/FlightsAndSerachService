const { CityController } = require("../../controllers/index.controller");
const router = require("../../utils/imports.util").express.Router();

/**
 * Request Method - POST
 * Route - api/v1/city/create
 * Summary : Create a new city
 */
router.post("/city", CityController.create);

/**
 * Request Method - GET
 * Route - api/v1/city/delete/:id
 * Summary : Delete a city
 */
router.delete("/delete/:id", CityController.delete);

/**
 * Request Method - PUT
 * Route - api/v1/city/update/:id
 * Summary : Update a city
 */
router.put("/update/:id", CityController.update);

/**
 * Request Method - GET
 * Route - api/v1/city/get
 * Summary : Get all cities
 */
router.get("/get/:id", CityController.get);

module.exports = router;
