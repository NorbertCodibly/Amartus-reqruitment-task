import { INode, TReduxAction } from '~/shared/types';
import { ACTION_TYPES } from './types';

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

const nodesReducer = (state = initialState, action: TReduxAction<ACTION_TYPES>) => {
  switch (action.type) {
    case ACTION_TYPES.GET_NODES:
      return {
        ...state,
        items: action.payload.nodes as INode[],
      };
    case ACTION_TYPES.CHECK_NODE:
      return {
        ...state,
        selectedNodeId: action.payload.selectedNodeId,
      };
    case ACTION_TYPES.ADD_NODE:
      return state;
    case ACTION_TYPES.UPDATE_NODE:
      return state;
    case ACTION_TYPES.DELETE_NODE:
      return state;
    case ACTION_TYPES.SAVE_NODES:
      return state;
    default:
      return state;
  }
};

export default nodesReducer;
