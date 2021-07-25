import { INode } from '~/shared/types';
import { NodesMapper } from './Nodes.mapper';
import { DEFAULT_NODE_NAME } from './Nodes.consts';

export class NodesUtils {
  static getUniqueNodeId(nodes: INode[]): number {
    const flattenedNodesList = NodesMapper.mapNodesToDto(nodes);
    const nodesIds = flattenedNodesList.map(node => node.id);
    const highestNodeId = Math.max(...nodesIds);
    return highestNodeId + 1;
  }

  static createNode(id: number): INode {
    return {
      id,
      name: DEFAULT_NODE_NAME,
      children: [],
    };
  }

  static insertNode(nodes: INode[], node: INode, parentId: number) {
    const mappedNode = NodesMapper.mapNodeToDto(node, parentId);
    const flattenedNodesList = [...NodesMapper.mapNodesToDto(nodes), mappedNode];
    return NodesMapper.mapDtoToNodes(flattenedNodesList);
  }

  static removeNode(nodes: INode[], nodeId: number) {
    const flattenedNodesList = NodesMapper.mapNodesToDto(nodes).filter(node => node.id !== nodeId);
    // TODO Norbert -> zrobić usuwanie potomnych node-ów, korzystając z drzewa składającego się z INode[]
    return NodesMapper.mapDtoToNodes(flattenedNodesList);
  }

  static updateNode(nodes: INode[], nodeId: number, updatedName: string) {
    const flattenedNodesList = NodesMapper.mapNodesToDto(nodes).map(node =>
      node.id === nodeId
        ? {
            ...node,
            name: updatedName,
          }
        : node
    );
    return NodesMapper.mapDtoToNodes(flattenedNodesList);
  }
}
