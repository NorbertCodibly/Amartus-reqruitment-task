import { NodesMock } from '../Nodes.mock';
import { INode } from '../../../shared/types';
import { NodesUtils } from './Nodes.utils';
import { NodesMapper } from '../mapper';
import { DEFAULT_NODE_NAME } from '../Nodes.consts';

const expectedCreatedNode: INode = {
  id: 1,
  name: DEFAULT_NODE_NAME,
  children: [],
};
const nodeParentId = NodesMock.nodes[0].id;

export const whenGivenNodes = (): INode[] => {
  return NodesMock.nodes;
};

export const whenCreatedNode = (): INode => {
  return NodesUtils.createNode(expectedCreatedNode.id);
};

export const whenInsertedNode = (node: INode): INode[] => {
  return NodesUtils.insertNode(NodesMock.nodes, node, nodeParentId);
};

export const whenCreatedNodeWithChildren = (): INode => {
  const node = NodesUtils.createNode(expectedCreatedNode.id);
  const childNode = NodesUtils.createNode(expectedCreatedNode.id + 1);
  node.children.push(childNode);

  return node;
};

export const whenGivenNodeParentId = (): number => {
  return nodeParentId;
};

export const thenNodeWithDefaultNameHasBeenCreated = (node: INode) => {
  expect(node.name).toEqual(DEFAULT_NODE_NAME);
};

export const thenShouldGenerateUniqueNodeId = (nodes: INode[]) => {
  const uniqueId = NodesUtils.getUniqueNodeId(nodes);
  const nodesIds = NodesMapper.mapNodesToDto(nodes).map(nodeDto => nodeDto.id);

  expect(nodesIds).not.toContain(uniqueId);
};

export const thenShouldInsertNewNode = (nodes: INode[], node: INode, parentId: number) => {
  const nodesAfterInsertion = NodesUtils.insertNode(nodes, node, parentId);
  const nodeParent = nodesAfterInsertion[0];
  expect(nodeParent.children).toContainEqual(node);
};

export const thenShouldRemoveNode = (nodes: INode[], node: INode) => {
  const nodesAfterInsertion = NodesUtils.removeNode(nodes, node.id);
  const nodeParent = nodesAfterInsertion[0];
  expect(nodeParent.children).not.toContainEqual(node);
};
