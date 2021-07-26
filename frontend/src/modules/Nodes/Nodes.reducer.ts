import { INode, TReduxAction } from '~/shared/types';
import { NodesUtils } from './Nodes.utils';
import { ACTION_TYPES } from './Nodes.consts';

interface IState {
  items: INode[];
  hasBeenModified: boolean;
  selectedNodeId: number | null;
}

const initialState: IState = {
  items: [],
  hasBeenModified: false,
  selectedNodeId: null,
};

const nodesReducer = (state = initialState, action: TReduxAction<keyof typeof ACTION_TYPES>) => {
  switch (action.type) {
    case ACTION_TYPES.GET_NODES:
      const { nodes } = action.payload;
      return {
        ...state,
        items: nodes as INode[],
      };

    case ACTION_TYPES.CHECK_NODE:
      const { selectedNodeId } = action.payload;
      return {
        ...state,
        selectedNodeId,
      };

    case ACTION_TYPES.ADD_NODE:
      const { node, parentId } = action.payload;

      return {
        ...state,
        items: NodesUtils.insertNode(state.items, node, parentId),
        hasBeenModified: true,
      };

    case ACTION_TYPES.UPDATE_NODE:
      const { nodeId, updatedName } = action.payload;
      return {
        ...state,
        items: NodesUtils.updateNode(state.items, nodeId, updatedName),
        hasBeenModified: true,
      };

    case ACTION_TYPES.DELETE_NODE:
      const { nodeId: deleteNodeId } = action.payload;
      return {
        ...state,
        items: NodesUtils.removeNode(state.items, deleteNodeId),
        hasBeenModified: true,
        selectedNodeId: null,
      };

    case ACTION_TYPES.SAVE_NODES:
      return {
        ...state,
        hasBeenModified: false,
      };

    default:
      return state;
  }
};

export default nodesReducer;
