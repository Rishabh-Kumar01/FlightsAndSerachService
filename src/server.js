const { imports } = require("./utils/index.util");
const config = require("./config/index.config");
const ApiRoutes = require("./routes/index.route");
const db = require("./models/index");

const app = imports.express();

// Middlewares
app.use(imports.morgan("dev"));
app.use(imports.cors());
app.use(imports.helmet());
app.use(imports.compression());
app.use(imports.bodyParser.json());
app.use(imports.bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", ApiRoutes);

// Server & Database Connection
const setupAndStartServer = () => {
  app.listen(config.serverConfig.PORT, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${config.serverConfig.PORT}`);

    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
    }

    const citywithAirports = await db.City.findAll({
      attributes: ["name"],
      include: {
        model: db.Airport,
        as: "airports",
        attributes: ["name"],
      },
    });

    console.log(citywithAirports);

    // await config.connection();
  });
};

// Call the function to start the server and connect to the database
setupAndStartServer();

// Home Route
app.get("/", (request, response) => {
  response.send("Hello Server!!!😊😊😊😊");
});

module.exports = app;
