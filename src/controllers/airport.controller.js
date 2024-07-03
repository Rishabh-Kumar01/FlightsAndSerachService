const { AirportService } = require("../services/index.service");
const { ResponseCodes } = require("../utils/index.util");

const airportService = new AirportService();

module.exports = {
  create: async (req, res) => {
    try {
      const airportRequestData = {
        name: req.body.name,
        cityId: req.body.cityId,
        address: req.body.address,
      };
      const airport = await airportService.create(airportRequestData);
      return res.status(ResponseCodes.SuccessCodes.CREATED).json({
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
      return res.status(ResponseCodes.SuccessCodes.OK).json({
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
      const airportRequestData = {
        name: req.body.name,
      };
      const airport = await airportService.update(
        req.params.id,
        airportRequestData
      );
      return res.status(ResponseCodes.SuccessCodes.OK).json({
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
      return res.status(ResponseCodes.SuccessCodes.OK).json({
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
