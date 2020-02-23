import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { TextArea, TextAreaSpace, TextAreaVariant, Stack } from '../';

const inputSpaces: TextAreaSpace[] = ['xs', 'sm', 'md', 'lg'];

const inputVariants: TextAreaVariant[] = ['outlined', 'filled', 'unstyled'];

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [withKnobs],
};

export const Simple = () => (
  <TextArea
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
    placeholder={text('placeholder', 'Simple input')}
    readOnly={boolean('readOnly', false)}
    required={boolean('required', false)}
    space={select('space', inputSpaces, 'md')}
    variant={select('variant', inputVariants, 'outlined')}
  />
);

export const AllSpaces = () => (
  <Stack spacing="base">
    {inputSpaces.map((space, idx) => (
      <TextArea key={uid(space, idx)} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {inputVariants.map((variant, idx) => (
      <TextArea key={uid(variant, idx)} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
