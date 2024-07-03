const { CityService } = require("../services/index.service");
const { ResponseCodes } = require("../utils/index.util");

const cityService = new CityService();

module.exports = {
  create: async (req, res) => {
    try {
      const cityRequestData = {
        name: req.body.name,
      };
      const city = await cityService.create(cityRequestData);
      return res.status(ResponseCodes.SuccessCodes.CREATED).json({
        success: true,
        message: "City created successfully",
        data: city,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "City not created",
        data: {},
        error: error,
      });
    }
  },

  bulkInsert: async (req, res) => {
    try {
      const cityRequestData = req.body.map((city) => {
        return {
          name: city.name.trim(),
        };
      });

      if (cityRequestData.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Cities not created",
          data: {},
          error: { message: "No cities provided" },
        });
      }

      const cities = await cityService.bulkInsertCities(cityRequestData);
      return res.status(ResponseCodes.SuccessCodes.CREATED).json({
        success: true,
        message: "Cities created successfully",
        data: cities,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Cities not created",
        data: {},
        error: error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const city = await cityService.destory(req.params.id);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "City deleted successfully",
        data: city,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "City not deleted",
        data: {},
        error: error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const cityRequestData = {
        name: req.body.name,
      };
      const city = await cityService.update(req.params.id, cityRequestData);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "City updated successfully",
        data: city,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "City not updated",
        data: {},
        error: error,
      });
    }
  },

  get: async (req, res) => {
    try {
      const city = await cityService.get(req.params.id);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "City retrieved successfully",
        data: city,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "City not retrieved",
        data: {},
        error: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const cities = await cityService.getAll(req.query);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Cities retrieved successfully",
        data: cities,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Cities not retrieved",
        data: {},
        error: error,
      });
    }
  },

  getAirports: async (req, res) => {
    try {
      const airports = await cityService.getAirportsByCity(req.params.id);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Airports retrieved successfully",
        data: airports,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Airports not retrieved",
        data: {},
        error: error,
      });
    }
  },
};
