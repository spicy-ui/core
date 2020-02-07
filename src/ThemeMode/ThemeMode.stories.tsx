import * as React from 'react';
import { Box, Button, Text, ThemeModeProvider, useThemeMode } from '../';

export default {
  title: 'ThemeMode',
  component: ThemeModeProvider,
};

const Test = () => {
  const { mode, isLight, toggle } = useThemeMode();

  return (
    <>
      <Box p="base" bg={isLight ? 'gray.50' : 'gray.800'} color={isLight ? 'gray.900' : 'gray.100'}>
        <Text>
          Current mode is: <code>{mode}</code>
        </Text>
      </Box>
      <Box p="base">
        <Button variant="ghost" color="blue" onClick={toggle}>
          Toggle mode
        </Button>
      </Box>
    </>
  );
};

export const Simple = () => (
  <ThemeModeProvider>
    <Test />
  </ThemeModeProvider>
);
