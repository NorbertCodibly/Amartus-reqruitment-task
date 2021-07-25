import { combineReducers } from 'redux';
import { nodesReducer } from '~/modules/Nodes';

export default combineReducers({
  nodes: nodesReducer,
});
