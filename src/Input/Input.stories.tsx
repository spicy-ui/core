import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Input, InputSpace, InputVariant, Stack } from '../';

const inputTypes = [
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const inputSpaces: InputSpace[] = ['xs', 'sm', 'md', 'lg'];

const inputVariants: InputVariant[] = ['outlined', 'filled', 'unstyled'];

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Input
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
    isInvalid={boolean('isInvalid', false)}
    placeholder={text('placeholder', 'Input')}
    readOnly={boolean('readOnly', false)}
    required={boolean('required', false)}
    space={select('space', inputSpaces, 'md')}
    type={select('type', inputTypes, 'text')}
    variant={select('variant', inputVariants, 'outlined')}
    onChange={({ target }) => action('onChange')(target.value)}
  />
);

export const AllSpaces = () => (
  <Stack spacing="base">
    {inputSpaces.map((space, idx) => (
      <Input key={uid(space, idx)} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {inputVariants.map((variant, idx) => (
      <Input key={uid(variant, idx)} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
