import { INodeDto } from '~/shared/dto';
import { INode, RootStateType } from '~/shared/types';

// const nodes = [
//   { id: 1, name: 'my node', pid: 2 },
//   { id: 2, name: 'kudu', pid: null },
//   { id: 3, name: 'node-xyz', pid: 2 },
//   { id: 4, name: 'super node', pid: null },
//   { id: 55, name: 'abc', pid: 4 },
//   { id: 67, name: 'aafsdf', pid: 4 },
//   { id: 12, name: 'bbb', pid: 4 },
//   { id: 11, name: 'cool node', pid: 12 },
//   { id: 7, name: 'awesome node', pid: null },
// ];

// const nodesTree: INode[] = [
//   {
//     id: 2,
//     name: 'kudu',
//     children: [
//       { id: 1, name: 'my node', children: [] },
//       { id: 3, name: 'node-xyz', children: [] },
//     ],
//   },
//   {
//     id: 4,
//     name: 'super node',
//     children: [
//       { id: 55, name: 'abc', children: [] },
//       { id: 67, name: 'aafsdf', children: [] },
//       {
//         id: 12,
//         name: 'bbb',
//         children: [{ id: 11, name: 'cool node', children: [] }],
//       },
//     ],
//   },
//   { id: 7, name: 'awesome node', children: [] },
// ];

export class NodesMapper {
  static mapDtoToNodes = (flattenNodes: INodeDto[]): INode[] => {
    const hashTable = Object.create(null);
    const nodesTree: INode[] = [];

    flattenNodes.forEach(node => (hashTable[node.id] = { ...node, children: [] }));
    flattenNodes.forEach(node => {
      const { pid, ...nodeWithStructure } = hashTable[node.id];
      const nodeHasRoot = node.pid;

      nodeHasRoot
        ? hashTable[node.pid].children.push(nodeWithStructure)
        : nodesTree.push(nodeWithStructure);
    });

    return nodesTree;
  };

  static mapNodesToDto = (nodesTree: INode[], nodeParentId: number = null): INodeDto[] => {
    return nodesTree.reduce((flattenedArr, node) => {
      const { id, children } = node;
      const currentNode = NodesMapper.mapNodeToDto(node, nodeParentId);
      return [...flattenedArr, currentNode, ...NodesMapper.mapNodesToDto(children, id)];
    }, []);
  };

  static mapNodeToDto = (node: INode, parentId: number): INodeDto => {
    const { id, name } = node;
    return {
      id,
      name,
      pid: parentId,
    };
  };

  static mapStateToSelectedNodeId = (state: RootStateType) => {
    return state.nodes.selectedNodeId;
  };
}
