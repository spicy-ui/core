import { addDecorator } from '@storybook/react';
import React from 'react';
import { Box, CSSReset, Theme } from '../src';

addDecorator(storyFn => (
  <Theme>
    <CSSReset />
    <Box m="base">{storyFn()}</Box>
  </Theme>
));
