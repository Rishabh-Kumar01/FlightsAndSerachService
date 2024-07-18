const { ResponseCodes } = require("../utils/index.util");

const validateCreateFlight = async (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.airplaneId ||
    !req.body.price
  ) {
    return res.status(ResponseCodes.ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for creating flight",
      error: "Missing Mandatory Fields",
    });
  }
  next();
};

const validateUpdateFlight = async (req, res, next) => {
  if (
    !req.body.departureAirportId &&
    !req.body.arrivalAirportId &&
    !req.body.departureTime &&
    !req.body.arrivalTime &&
    !req.body.price &&
    !req.body.availableSeats
  ) {
    return res.status(ResponseCodes.ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for updating flight",
      error: "Missing Mandatory Fields",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
  validateUpdateFlight,
};
