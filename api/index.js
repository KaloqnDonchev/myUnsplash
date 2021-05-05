const cors = require("cors");
const bodyParser = require('body-parser');


module.exports = (express, app) => {
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}