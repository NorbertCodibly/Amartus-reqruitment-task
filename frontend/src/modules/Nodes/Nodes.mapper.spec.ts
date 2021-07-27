import {
  whenProvidedSingleNode,
  whenProvidedParentId,
  whenProvidedNodes,
  whenProvidedNodesDto,
  thenItShouldBeCorrectlyMappedToDtos,
  thenItShouldBeCorrectlyMappedToDto,
  thenItShouldBeCorrectlyMappedToNodes,
} from './Nodes.mapper.spec.helper';

describe('Nodes mapper', () => {
  it('should correctly map single node to the nodeDto', () => {
    const node = whenProvidedSingleNode();
    const parentId = whenProvidedParentId();
    thenItShouldBeCorrectlyMappedToDto(node, parentId);
  });

  it('should correctly map nodes tree structure to the nodesDto', () => {
    const nodes = whenProvidedNodes();
    thenItShouldBeCorrectlyMappedToDtos(nodes);
  });

  it('should correctly map nodesDto to the nodes tree structure', () => {
    const nodesDto = whenProvidedNodesDto();
    thenItShouldBeCorrectlyMappedToNodes(nodesDto);
  });
});
