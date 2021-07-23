const loadJsonFile = require("load-json-file");
const writeJsonFile = require("write-json-file");

class JsonFileService {
  constructor(filePath) {
    this._filePath = filePath;
  }

  getData() {
    return loadJsonFile(this._filePath);
  }

  setData(data) {
    return writeJsonFile(this._filePath, data);
  }
}

module.exports = JsonFileService;
