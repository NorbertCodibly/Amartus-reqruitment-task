import {
  whenGivenNodes,
  whenCreatedNode,
  whenInsertedNode,
  whenGivenNodeParentId,
  thenShouldGenerateUniqueNodeId,
  thenNodeWithDefaultNameHasBeenCreated,
  thenShouldInsertNewNode,
  thenShouldRemoveNode,
} from './Nodes.utils.spec.helper';

describe('Nodes utils', () => {
  it('should create node with default name', () => {
    const node = whenCreatedNode();
    thenNodeWithDefaultNameHasBeenCreated(node);
  });

  it('should insert new node to the nodes tree', () => {
    const node = whenCreatedNode();
    const nodes = whenGivenNodes();
    const parentId = whenGivenNodeParentId();
    thenShouldInsertNewNode(nodes, node, parentId);
  });

  it('should get node id that is not yet existing in the nodes tree', () => {
    const nodes = whenGivenNodes();
    thenShouldGenerateUniqueNodeId(nodes);
  });

  it('should remove node from the nodes tree', () => {
    const node = whenCreatedNode();
    const parentId = whenGivenNodeParentId();
    const nodes = whenInsertedNode(node);
    thenShouldInsertNewNode(nodes, node, parentId);
    thenShouldRemoveNode(nodes, node);
  });
});
