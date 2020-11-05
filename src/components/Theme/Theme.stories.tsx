import * as React from 'react';
import { useTheme } from 'styled-components';
import { Box, ThemeProvider } from '..';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
};

export const Simple = () => {
  return <ThemeProvider>🌶️ ThemeProvider</ThemeProvider>;
};

export const DefaultTheme = () => {
  const StringifyTheme: React.FC = () => {
    const theme = useTheme();
    return <Box as="pre">{JSON.stringify(theme, null, 2)}</Box>;
  };

  return (
    <ThemeProvider>
      <StringifyTheme />
    </ThemeProvider>
  );
};
