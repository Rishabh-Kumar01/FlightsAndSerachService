const { CityService } = require("../services/index.service");

const cityService = new CityService();

module.exports = {
  create: async (req, res) => {
    try {
      const city = await cityService.createCity(req.body);
      return res.status(201).json({
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
      const cities = await cityService.bulkInsertCities(req.body);
      return res.status(201).json({
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
      const city = await cityService.deleteCity(req.params.id);
      return res.status(200).json({
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
      const city = await cityService.updateCity(req.params.id, req.body);
      return res.status(200).json({
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
      const city = await cityService.getCity(req.params.id);
      return res.status(200).json({
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
      const cities = await cityService.getAllCities(req.query);
      return res.status(200).json({
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
      return res.status(200).json({
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
