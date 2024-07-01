/**
 * Checks if the given date string is a valid date
 * @param {string} dateString - The date string to validate
 * @returns {boolean} - True if valid, false otherwise
 */
const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * Checks if the given date is in the future
 * @param {Date} date - The date to check
 * @returns {boolean} - True if in the future, false otherwise
 */
const isInFuture = (date) => {
  const currentTime = new Date();
  return date > currentTime;
};

/**
 * Checks if the departure time is before the arrival time
 * @param {Date} departureTime - The departure time
 * @param {Date} arrivalTime - The arrival time
 * @returns {boolean} - True if departure is before arrival, false otherwise
 */
const isDepartureBeforeArrival = (departureTime, arrivalTime) => {
  return departureTime < arrivalTime;
};

/**
 * Validates flight times
 * @param {string} departureTimeStr - Departure time string
 * @param {string} arrivalTimeStr - Arrival time string
 * @throws {Error} If any validation fails
 */
const validateFlightTimes = (departureTimeStr, arrivalTimeStr) => {
  if (!isValidDate(departureTimeStr) || !isValidDate(arrivalTimeStr)) {
    throw { error: "Invalid date format for departure or arrival time" };
  }

  const departureTime = new Date(departureTimeStr);
  const arrivalTime = new Date(arrivalTimeStr);

  if (!isInFuture(departureTime) || !isInFuture(arrivalTime)) {
    throw { error: "Departure and arrival times must be in the future" };
  }

  if (!isDepartureBeforeArrival(departureTime, arrivalTime)) {
    throw { error: "Departure time must be earlier than arrival time" };
  }
};

module.exports = {
  isValidDate,
  isInFuture,
  isDepartureBeforeArrival,
  validateFlightTimes,
};
