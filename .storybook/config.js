import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react';
import { Theme } from '../src/Theme';

const theme = create({ brandTitle: '🌶️ Spicy UI' });

addParameters({ options: { theme } });

addDecorator(storyFn => <Theme>{storyFn()}</Theme>);

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
