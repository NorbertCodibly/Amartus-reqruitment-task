const express = require("express");
const NodesService = require("./nodes.service");
const NodesMapper = require("./nodes.mapper");

class NodesController {
  constructor() {
    this.nodesService = new NodesService();
  }

  getControllerRouter() {
    const router = express.Router();
    router.get("/", async (req, res) => {
      const nodesData = await this.nodesService.getNodes();
      res.send(nodesData);
    });

    router.put("/", async (req, res) => {
      const nodes = NodesMapper.mapRequestBodyToNodes(req);
      await this.nodesService.setNodes(nodes);
      res.send(nodes);
    });

    return router;
  }
}

module.exports = NodesController;
