import { addDecorator } from '@storybook/react';
import React from 'react';
import { Box, ColorModeProvider, CssReset, Theme } from '../src';

addDecorator((storyFn) => (
  <ColorModeProvider>
    <Theme>
      <CssReset />
      <Box m="base">{storyFn()}</Box>
    </Theme>
  </ColorModeProvider>
));
