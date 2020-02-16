import { addDecorator } from '@storybook/react';
import React from 'react';
import { Box, ColorModeProvider, CSSReset, Theme } from '../src';

addDecorator(storyFn => (
  <ColorModeProvider>
    <Theme>
      <CSSReset />
      <Box m="base">{storyFn()}</Box>
    </Theme>
  </ColorModeProvider>
));
