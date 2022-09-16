import { createTheme } from '@mui/material/styles';
import { getDarkColors, getLightColors, getTokensBase } from './mui-style-utils';

const componentOverrides = {
  MuiScopedCssBaseline: {
    styleOverrides: {
      root: {
        display: 'flex',
        flex: 1
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const
      }
    }
  }
};

export const MuiDarkTheme = createTheme({
  components: componentOverrides,
  palette: {
    mode: 'dark'
  },
  ...getTokensBase(),
  colors: getDarkColors()
});

export const MuiLightTheme = createTheme({
  components: componentOverrides,
  palette: {
    mode: 'light'
  },
  ...getTokensBase(),
  colors: getLightColors()
});
