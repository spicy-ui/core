import * as React from 'react';
import { Box, ThemeProvider } from '..';

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
};

export const Simple = () => <ThemeProvider>I am wrapped by a ThemeProvider component</ThemeProvider>;

export const Nested = () => (
  <>
    <Box bg="black" color="white" p="4">
      <code>theme.colors.black = &apos;#000&apos;</code>
      <ThemeProvider theme={{ colors: { black: 'rebeccapurple' } }}>
        <Box bg="black" color="white" p="4" mt="4">
          <code>theme.colors.black = &apos;rebeccapurple&apos;</code>
        </Box>
      </ThemeProvider>
    </Box>
  </>
);
