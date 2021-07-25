import { NodesService } from './Nodes.service';
import { ACTION_TYPES } from './types';
import { DispatchType, INode, GetStateType } from '~/shared/types';

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
}
