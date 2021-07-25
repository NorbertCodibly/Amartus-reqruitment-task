import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import api from './api';
import '~/styles/main.scss';

const App = () => {
  React.useEffect(() => {
    api
      .fetchNodes()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Provider store={store}>
      <h3>Welcome to React Boilerplate or is it?</h3>
    </Provider>
  );
};
export default App;
