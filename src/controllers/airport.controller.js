const { AirportService } = require("../services/index.service");

const airportService = new AirportService();

module.exports = {
  create: async (req, res) => {
    try {
      const airport = await airportService.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Airport created successfully",
        data: airport,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Airport not created",
        data: {},
        error: error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const airport = await airportService.destory(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Airport deleted successfully",
        data: airport,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Airport not deleted",
        data: {},
        error: error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const airport = await airportService.update(req.params.id, req.body);
      return res.status(200).json({
        success: true,
        message: "Airport updated successfully",
        data: airport,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Airport not updated",
        data: {},
        error: error,
      });
    }
  },

  get: async (req, res) => {
    try {
      const airport = await airportService.get(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Airport retrieved successfully",
        data: airport,
        error: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Airport not retrieved",
        data: {},
        error: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const airports = await airportService.getAll(req.query);
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
