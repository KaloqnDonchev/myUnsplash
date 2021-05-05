const express = require("express");
const config = require("./config.js");
const db = require("./db/index.js");
const { routes } = require("./api/routers/default.js");
const app = express();

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
routes(app);

db.startDBConnection().then(() => {
  require("./api")(express, app);

  app.listen(config.backendPort, () => {
    console.log(`App is running on port ${config.backendPort}`);
  });
});
