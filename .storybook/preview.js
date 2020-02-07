import { addDecorator } from '@storybook/react';
import React from 'react';
import { CSSReset, Theme } from '../src/Theme';

addDecorator(storyFn => (
  <Theme>
    <CSSReset />
    {storyFn()}
  </Theme>
));
