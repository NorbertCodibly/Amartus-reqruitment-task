const JsonFileService = require("../../services/json-file");
const filePath = `${__dirname}/nodes.data.json`;

class NodesService {
  constructor() {
    this.jsonFileService = new JsonFileService(filePath);
  }

  getNodes() {
    return this.jsonFileService.getData();
  }

  setNodes(data) {
    return this.jsonFileService.setData(data);
  }
}

module.exports = NodesService;
