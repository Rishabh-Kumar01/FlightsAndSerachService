// All imports are defined here, so that they can be imported in other files using a single import statement.
module.exports = {
  mongoose: require("mongoose"),
  morgan: require("morgan"),
  helmet: require("helmet"),
  cors: require("cors"),
  express: require("express"),
  compression: require("compression"),
  expressValidator: require("express-validator"),
  dotenv: require("dotenv"),
  bodyParser: require("body-parser"),
  sequelize: require("sequelize"),
};
