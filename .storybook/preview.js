import React from 'react';
import { injectGlobalStyles, ThemeProvider } from '../src';

export const parameters = {
  controls: { expanded: true },
  layout: 'fullscreen',
};

const { GlobalStyle } = injectGlobalStyles();

const withThemeProvider = (Story) => (
  <ThemeProvider>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
