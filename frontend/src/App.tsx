import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { NodesModule } from '~/modules';
import store from '~/store';
import theme from '~/theme';
import '~/styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NodesModule />
      </ThemeProvider>
    </Provider>
  );
};
export default App;
