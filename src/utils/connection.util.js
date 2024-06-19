const mongoose = require("mongoose");
const config = require("./config.util");

module.exports = () =>
  mongoose
    .connect(config.DATABASE_URL)
    .then(() => console.log("CONNECTED TO DATABASE"))
    .catch((error) => console.log("DATABASE CONNECTION ERROR", error));
