import { INode } from '~/shared/types';
import { NodesMapper } from './Nodes.mapper';
import { DEFAULT_NODE_NAME } from './Nodes.consts';
import { INodeDto } from '~/shared/dto';
import { getArrayWithUniqueValues } from '~/utils';
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

  static removeNodeChildren(nodes: INode[], nodeId: number, parentNode?: INode): void {
    for (const node of nodes) {
      const isSearchedNode = node.id === nodeId;
      const isRootNode = !parentNode;

      if (isSearchedNode) {
        if (isRootNode) nodes = nodes.filter(a => a.id !== nodeId);
        else parentNode.children = parentNode.children.filter(a => a.id !== nodeId);
        return;
      }

      NodesUtils.removeNodeChildren(node.children, nodeId, node);
    }
  }

  static removeNode(nodes: INode[], nodeId: number): INode[] {
    const nodesCopy = cloneDeep(nodes);
    console.log(NodesUtils.removeNodeChildren(nodesCopy, nodeId));
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
