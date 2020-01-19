import { addDecorator } from '@storybook/react';
import React from 'react';
import { Theme } from '../src/Theme';

addDecorator(storyFn => <Theme>{storyFn()}</Theme>);
