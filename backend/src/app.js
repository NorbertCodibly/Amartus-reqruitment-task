const express = require("express");
const app = express();
const ROUTES = require("./consts/routes.consts");
const APP_CONFIG = require("./app.config");
const nodesController = require("./nodes");

app.use(ROUTES.nodes, nodesController);

app.listen(APP_CONFIG.port, () => {
  console.log(`App is listening on the port ${APP_CONFIG.port}`);
});
