import React from 'react';
import { ThemeProvider } from '../src';
import { Parameters } from '@storybook/react';

export const parameters: Parameters = {
  controls: { expanded: true },
  layout: 'padded',
};

const withThemeProvider = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];
