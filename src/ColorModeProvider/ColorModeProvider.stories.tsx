import * as React from 'react';
import { Button, ColorModeProvider, Text, useColorMode } from '..';

export default {
  title: 'ColorModeProvider',
  component: ColorModeProvider,
};

const ToggleAndDisplay = () => {
  const { colorMode, toggle } = useColorMode();

  return (
    <>
      <Text>
        Current mode is: <code>{colorMode}</code>
      </Text>
      <Button type="button" onClick={toggle} color="blue">
        Toggle mode
      </Button>
    </>
  );
};

export const Simple = () => <ToggleAndDisplay />;
