import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    brandTitle: '🌶️ Spicy UI',
  }),
});
