const validateCreateFlight = async (req, res, next) => {
  console.log(req.body);
  if (
    !req.body.flightNumber ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.airplaneId ||
    !req.body.price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for creating flight",
      error: "Missing Mandatory Fields",
    });
  }
  next();
};

module.exports = {
  validateCreateFlight,
};
