import * as React from 'react';
import { addParameters } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '@mui/material';
import { MuiDarkTheme, MuiLightTheme } from '../src';
import '../src/reset.css';

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();
    return (
      <ThemeProvider theme={isDarkMode ? MuiDarkTheme : MuiLightTheme}>
        <Story />
      </ThemeProvider>
    );
  }
];

addParameters({
  options: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    showPanel: true,
    panelPosition: 'bottom'
  },
  darkMode: {
    stylePreview: true,
    classTarget: 'html'
  }
});
