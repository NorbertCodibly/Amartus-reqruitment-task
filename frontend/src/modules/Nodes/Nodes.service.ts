import api from '../../api';
import { INode } from '../../shared/types';
import { NodesMapper } from './Nodes.mapper';

export class NodesService {
  static getNodes() {
    return api.fetchNodes().then(({ data }) => NodesMapper.mapDtoToNodes(data));
  }

  static saveNodes(nodes: INode[]) {
    const nodesDto = NodesMapper.mapNodesToDto(nodes);
    return api.saveNodes(nodesDto);
  }
}
