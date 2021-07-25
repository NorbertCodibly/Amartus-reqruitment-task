import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import '~/styles/main.scss';
import { NodesDashboard } from '~/modules';

const App = () => {
  return (
    <Provider store={store}>
      <NodesDashboard />
    </Provider>
  );
};
export default App;
