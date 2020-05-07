import * as React from 'react';
import { Button, ColorModeProvider, Text, useColorMode } from '..';

export default {
  title: 'ColorMode',
  component: ColorModeProvider,
};

const ToggleAndDisplay = () => {
  const { mode, toggle } = useColorMode();

  return (
    <>
      <Text mb="sm">
        Current mode is: <code>{mode}</code>
      </Text>
      <Button color="blue" onClick={toggle}>
        Toggle mode
      </Button>
    </>
  );
};

export const Simple = () => <ToggleAndDisplay />;
