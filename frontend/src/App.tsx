import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import '~/styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <h3>Welcome to React Boilerplate or is it?</h3>
    </Provider>
  );
};
export default App;
