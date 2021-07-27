import { NodesMapper } from './Nodes.mapper';
import { NodesMock } from '../Nodes.mock';
import { INode } from '../../../shared/types';
import { INodeDto } from '../../../shared/dto';

const singleNode = NodesMock.nodes[0];
const singleDtoNode = NodesMock.nodesDto[0];
const parentId = singleDtoNode.pid;

export const whenProvidedSingleNode = (): INode => {
  return singleNode;
};

export const whenProvidedParentId = (): number => {
  return parentId;
};

export const whenProvidedNodes = (): INode[] => {
  return NodesMock.nodes;
};

export const whenProvidedNodesDto = (): INodeDto[] => {
  return NodesMock.nodesDto;
};

export const thenItShouldBeCorrectlyMappedToDtos = (nodes: INode[]) => {
  const mappedNodes = NodesMapper.mapNodesToDto(nodes);
  mappedNodes.forEach(mappedNode => expect(NodesMock.nodesDto).toContainEqual(mappedNode));
};

export const thenItShouldBeCorrectlyMappedToDto = (node: INode, parentId: number) => {
  const mappedNode = NodesMapper.mapNodeToDto(node, parentId);
  expect(singleDtoNode).toEqual(mappedNode);
};

export const thenItShouldBeCorrectlyMappedToNodes = (nodes: INodeDto[]) => {
  const mappedNodes = NodesMapper.mapDtoToNodes(nodes);
  const rootNodesCount = nodes.filter(node => !node.pid).length;

  expect(mappedNodes.length).toEqual(rootNodesCount);
};
