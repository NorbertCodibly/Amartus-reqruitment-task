class NodesMapper {
  static mapRequestBodyToNodes(request) {
    return request.body.nodes;
  }
}

module.exports = NodesMapper;
