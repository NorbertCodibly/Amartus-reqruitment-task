const NodesController = require("./nodes.controller");
const nodesRouter = new NodesController().getControllerRouter();

module.exports = nodesRouter;
