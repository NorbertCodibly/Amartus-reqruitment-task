import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo['A400'],
    },
    secondary: {
      main: red['A400'],
    },
  },
  typography: {
    allVariants: {
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export default theme;
