import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';

import { spicyui } from './theme';
import { Theme } from '../src/Theme';

addParameters({ options: { theme: spicyui } });

addDecorator(storyFn => <Theme>{storyFn()}</Theme>);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
