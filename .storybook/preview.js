import { addDecorator } from '@storybook/react';
import React from 'react';
import { Box, injectGlobalStyles, ThemeProvider } from '../src';

const { GlobalStyle } = injectGlobalStyles();

addDecorator((storyFn) => (
  <ThemeProvider>
    <GlobalStyle />
    <Box p={4}>{storyFn()}</Box>
  </ThemeProvider>
));

export const parameters = {
  controls: { expanded: true },
  layout: 'fullscreen',
};
