import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root.reducer';

export const configureStore = (initialState = {}) => {
  const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, initialState, composeEnhancers);
};
