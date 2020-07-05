import { addDecorator } from '@storybook/react';
import React from 'react';
import { SpicyProvider } from '../src';

addDecorator((storyFn) => <SpicyProvider>{storyFn()}</SpicyProvider>);
