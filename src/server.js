const utils = require("./utils/index.util");
const routes = require("./routes/index.route");

const app = utils.imports.express();

// Middlewares
app.use(utils.imports.morgan("dev"));
app.use(utils.imports.cors());
app.use(utils.imports.helmet());
app.use(utils.imports.compression());
app.use(utils.imports.express.json());

// Options Routes
app.use("/api/v1/options", routes.options);

// Server
app.listen(utils.config.PORT, async () => {
  console.log(`SERVER IS RUNNING ON PORT ${utils.config.PORT}`);
  await utils.connection();
});

// Home Route
app.get("/", (request, response) => {
  response.send("Hello Server!!!😊😊😊😊");
});

module.exports = app;
