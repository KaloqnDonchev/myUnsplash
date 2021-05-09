const cors = require("cors");
const bodyParser = require('body-parser');
const express = require("express");
const config = require("./config.js");
const db = require("./db/index.js");
const { routes } = require("./api/routers/default.js");
const app = express();


// global.basedir = __dirname;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json());
app.use(cors({origin: '*', credentials: true}));

routes(app);

db.startDBConnection().then(() => {
  // require("./api")(express, app);

  app.listen(config.backendPort, () => {
    console.log(`App is running on port ${config.backendPort}`);
  });
});