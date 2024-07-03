const { FlightService } = require("../services/index.service");
const { ResponseCodes } = require("../utils/index.util");

const flightService = new FlightService();

module.exports = {
  async createFlight(req, res) {
    try {
      const flightRequestData = {
        flightNumber: req.body.flightNumber,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        departureTime: req.body.departureTime,
        arrivalTime: req.body.arrivalTime,
        airplaneId: req.body.airplaneId,
        price: req.body.price,
      };
      const flight = await flightService.createFlight(flightRequestData);
      return res.status(ResponseCodes.SuccessCodes.CREATED).json({
        success: true,
        message: "Successfully created a new flight",
        data: flight,
        error: {},
      });
    } catch (error) {
      console.error(
        "Something went wrong in FlightController:createFlight",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Something went wrong while creating a flight",
        data: {},
        error: error,
      });
    }
  },

  async getFlight(req, res) {
    try {
      const flight = await flightService.getFlight(req.params.id);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Successfully retrieved a flight",
        data: flight,
        error: {},
      });
    } catch (error) {
      console.error(
        "Something went wrong in FlightController:getFlight",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Something went wrong while retrieving a flight",
        data: {},
        error: error,
      });
    }
  },

  async getAllFlights(req, res) {
    try {
      const flights = await flightService.getAllFlights(req.query);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Successfully retrieved all flights",
        data: flights,
        error: {},
      });
    } catch (error) {
      console.log(
        "Something went wrong in FlightController:getAllFlights",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Something went wrong while retrieving all flights",
        data: {},
        error: error,
      });
    }
  },
};
