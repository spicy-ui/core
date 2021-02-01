import React from 'react';
import { ThemeProvider } from '../src';

export const parameters = {
  controls: { expanded: true },
  layout: 'fullscreen',
};

const withThemeProvider = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
