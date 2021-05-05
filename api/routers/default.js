const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.js");

let routes = (app) => {
  router.post("/upload", uploadController.uploadFiles);

  return app.use("/", router);
};

module.exports = {
  routes
}
