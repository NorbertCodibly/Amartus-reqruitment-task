import { INode } from '~/shared/types';
import { NodesMapper } from './Nodes.mapper';
import { DEFAULT_NODE_NAME } from './Nodes.consts';
import cloneDeep from 'lodash/cloneDeep';

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

  static insertNode(nodes: INode[], node: INode, parentId: number): INode[] {
    const mappedNode = NodesMapper.mapNodeToDto(node, parentId);
    const flattenedNodesList = [...NodesMapper.mapNodesToDto(nodes), mappedNode];
    return NodesMapper.mapDtoToNodes(flattenedNodesList);
  }

  // TODO Norbert -> popracować nad nazwą
  static removeNodeStructure(nodes: INode[], nodeId: number): void {
    const childIndex = nodes.findIndex(node => node.id === nodeId);
    nodes.splice(childIndex, 1);
  }

  static removeNodeChild(nodes: INode[], nodeId: number, parentNode?: INode): void {
    for (const node of nodes) {
      const isSearchedNode = node.id === nodeId;
      const isRootNode = !parentNode;

      if (isSearchedNode) {
        const listContainingSearchedNode = isRootNode ? nodes : parentNode.children;
        return NodesUtils.removeNodeStructure(listContainingSearchedNode, nodeId);
      }

      NodesUtils.removeNodeChild(node.children, nodeId, node);
    }
  }

  static removeNode(nodes: INode[], nodeId: number): INode[] {
    const nodesCopy = cloneDeep(nodes);
    NodesUtils.removeNodeChild(nodesCopy, nodeId);
    return nodesCopy;
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
