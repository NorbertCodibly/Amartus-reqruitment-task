const express = require("express");
const app = express();
const ROUTES = require("./consts/routes.consts");
const APP_CONFIG = require("./app.config");
const nodesRouter = require("./routers/nodes");

app.use(express.json());
app.use(ROUTES.nodes, nodesRouter);

app.listen(APP_CONFIG.port, () => {
  console.log(`App is listening on the port ${APP_CONFIG.port}`);
});
