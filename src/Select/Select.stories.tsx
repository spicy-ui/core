import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Select, SelectSpace, SelectVariant, Stack } from '../';

const options = ['apples', 'bananas', 'oranges', 'pears'].map((value, idx) => (
  <option key={uid(value, idx)} value={value}>
    {value}
  </option>
));

const selectSpaces: SelectSpace[] = ['xs', 'sm', 'md', 'lg'];

const selectVariants: SelectVariant[] = ['outlined', 'filled', 'unstyled'];

export default {
  title: 'Select',
  component: Select,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Select
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
    placeholder={text('placeholder', 'Select input')}
    required={boolean('required', false)}
    space={select('space', selectSpaces, 'md')}
    variant={select('variant', selectVariants, 'outlined')}
  >
    {options}
  </Select>
);

export const AllSpaces = () => (
  <Stack spacing="base">
    {selectSpaces.map((space, idx) => (
      <Select key={uid(space, idx)} space={space} placeholder={space}>
        {options}
      </Select>
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {selectVariants.map((variant, idx) => (
      <Select key={uid(variant, idx)} variant={variant} placeholder={variant}>
        {options}
      </Select>
    ))}
  </Stack>
);
