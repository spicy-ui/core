import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: '🌶️ Spicy UI',
    brandUrl: 'https://github.com/spicy-ui/core',
  }),
});
