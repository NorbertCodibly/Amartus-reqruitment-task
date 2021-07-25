import { NodesService } from './Nodes.service';
import { ACTION_TYPES } from './types';
import { DispatchType, GetStateType } from '~/shared/types';
import { NodesMapper } from './Nodes.mapper';
import { NodesUtils } from './Nodes.utils';

export class NodesActions {
  static getNodes() {
    return (dispatch: DispatchType) => {
      return NodesService.getNodes().then(nodes => {
        dispatch({
          type: ACTION_TYPES.GET_NODES,
          payload: {
            nodes,
          },
        });
      });
    };
  }

  static saveNodes() {
    return (dispatch: DispatchType, getState: GetStateType) => {
      const {
        nodes: { items },
      } = getState();

      return NodesService.saveNodes(items);
    };
  }

  static selectNode(nodeId: number) {
    return (dispatch: DispatchType, getState: GetStateType) => {
      const selectedNodeId = NodesMapper.mapStateToSelectedNodeId(getState());
      const unselectNode = selectedNodeId === nodeId;

      return dispatch({
        type: ACTION_TYPES.CHECK_NODE,
        payload: {
          selectedNodeId: unselectNode ? null : nodeId,
        },
      });
    };
  }

  static addNode() {
    return (dispatch: DispatchType, getState: GetStateType) => {
      const {
        nodes: { items, selectedNodeId },
      } = getState();
      const uniqueNodeId = NodesUtils.getUniqueNodeId(items);
      const createdNode = NodesUtils.createNode(uniqueNodeId);

      return dispatch({
        type: ACTION_TYPES.ADD_NODE,
        payload: {
          parentId: selectedNodeId,
          node: createdNode,
        },
      });
    };
  }

  static updateNode(updatedName: string) {
    return (dispatch: DispatchType, getState: GetStateType) => {
      const selectedNodeId = NodesMapper.mapStateToSelectedNodeId(getState());

      return dispatch({
        type: ACTION_TYPES.UPDATE_NODE,
        payload: {
          nodeId: selectedNodeId,
          updatedName,
        },
      });
    };
  }

  static deleteNode() {
    return (dispatch: DispatchType, getState: GetStateType) => {
      const selectedNodeId = NodesMapper.mapStateToSelectedNodeId(getState());

      return dispatch({
        type: ACTION_TYPES.DELETE_NODE,
        payload: {
          nodeId: selectedNodeId,
        },
      });
    };
  }
}
