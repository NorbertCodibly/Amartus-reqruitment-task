import { INodeDto } from '~/shared/dto';
import { INode, RootStateType } from '~/shared/types';

export class NodesMapper {
  static mapDtoToNodes = (flattenNodes: INodeDto[]): INode[] => {
    const nodesHashTable = Object.create(null);
    const nodesTree: INode[] = [];

    flattenNodes.forEach(node => (nodesHashTable[node.id] = { ...node, children: [] }));
    flattenNodes.forEach(node => {
      const { pid, ...nodeWithStructure } = nodesHashTable[node.id];
      const nodeHasRoot = node.pid;

      nodeHasRoot
        ? nodesHashTable[node.pid].children.push(nodeWithStructure)
        : nodesTree.push(nodeWithStructure);
    });

    return nodesTree;
  };

  static mapNodeToDto = (node: INode, parentId: number): INodeDto => {
    const { id, name } = node;
    return {
      id,
      name,
      pid: parentId,
    };
  };

  static mapNodesToDto = (nodesTree: INode[], nodeParentId: number = null): INodeDto[] => {
    return nodesTree.reduce((flattenedArr, node) => {
      const { id, children } = node;
      const currentNode = NodesMapper.mapNodeToDto(node, nodeParentId);
      return [...flattenedArr, currentNode, ...NodesMapper.mapNodesToDto(children, id)];
    }, []);
  };

  static mapStateToSelectedNodeId = (state: RootStateType) => {
    return state.nodes.selectedNodeId;
  };
}
