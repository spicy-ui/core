import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Input, InputSpace, InputVariant, Stack, Text } from '../';

const inputSpaces: InputSpace[] = ['sm', 'base', 'lg'];

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

const inputVariants: InputVariant[] = ['outline', 'filled', 'unstyled'];

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Input
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
    placeholder={text('placeholder', 'Simple input')}
    readOnly={boolean('readOnly', false)}
    required={boolean('required', false)}
    space={select('space', inputSpaces, 'base')}
    type={select('type', inputTypes, 'text')}
    variant={select('variant', inputVariants, 'outline')}
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

export const AllTypes = () => (
  <Stack spacing="base">
    {inputTypes.map((type, idx) => (
      <div key={uid(type, idx)}>
        <Text>
          <code>{type}</code>
        </Text>
        <Input type={type} />
      </div>
    ))}
  </Stack>
);
