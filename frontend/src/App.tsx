import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { NodesDashboard } from '~/modules';
import '~/styles/main.scss';
import store from '~/store';
import theme from '~/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NodesDashboard />
      </ThemeProvider>
    </Provider>
  );
};
export default App;
