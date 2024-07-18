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
      const flight = await flightService.create(flightRequestData);
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

  async updateFlight(req, res) {
    try {
      const flightRequestData = {
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        departureTime: req.body.departureTime,
        arrivalTime: req.body.arrivalTime,
        price: req.body.price,
        availableSeats: req.body.availableSeats,
      };
      const flight = await flightService.update(
        req.params.id,
        flightRequestData
      );
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Successfully updated a flight",
        data: flight,
        error: {},
      });
    } catch (error) {
      console.error(
        "Something went wrong in FlightController:updateFlight",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Something went wrong while updating a flight",
        data: {},
        error: error,
      });
    }
  },

  async deleteFlight(req, res) {
    try {
      const flight = await flightService.destory(req.params.id);
      return res.status(ResponseCodes.SuccessCodes.OK).json({
        success: true,
        message: "Successfully deleted a flight",
        data: flight,
        error: {},
      });
    } catch (error) {
      console.error(
        "Something went wrong in FlightController:deleteFlight",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Something went wrong while deleting a flight",
        data: {},
        error: error,
      });
    }
  },

  async getFlight(req, res) {
    try {
      const flight = await flightService.get(req.params.id);
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
      const flights = await flightService.getAll(req.query);
      console.log(flights);
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
