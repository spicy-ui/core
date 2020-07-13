import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Select, Stack } from '..';

const options = ['apples', 'bananas', 'oranges', 'pears'].map((value, idx) => (
  <option key={uid(value, idx)} value={value}>
    {value}
  </option>
));

const selectSpaces = ['xs', 'sm', 'md', 'lg'];

const selectVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Select',
  component: Select,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Select
    disabled={boolean('disabled', false)}
    isInvalid={boolean('isInvalid', false)}
    placeholder={text('placeholder', 'Select input')}
    required={boolean('required', false)}
    space={select('space', selectSpaces, 'md')}
    variant={select('variant', selectVariants, 'outlined')}
    onChange={({ target }) => action('onChange')(target.value)}
  >
    {options}
  </Select>
);

export const AllSpaces = () => (
  <Stack spacing="4">
    {selectSpaces.map((space, idx) => (
      <Select key={uid(space, idx)} space={space} placeholder={space}>
        {options}
      </Select>
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="4">
    {selectVariants.map((variant, idx) => (
      <Select key={uid(variant, idx)} variant={variant} placeholder={variant}>
        {options}
      </Select>
    ))}
  </Stack>
);
