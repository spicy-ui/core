import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, TextArea } from '..';

const textAreaSpaces = ['xs', 'sm', 'md', 'lg'];

const textAreaVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [withKnobs],
};

export const Simple = () => (
  <TextArea
    disabled={boolean('disabled', false)}
    isInvalid={boolean('isInvalid', false)}
    placeholder={text('placeholder', 'Text area')}
    readOnly={boolean('readOnly', false)}
    required={boolean('required', false)}
    space={select('space', textAreaSpaces, 'md')}
    variant={select('variant', textAreaVariants, 'outlined')}
    onChange={({ target }) => action('onChange')(target.value)}
  />
);

export const AllSpaces = () => (
  <Stack spacing="4">
    {textAreaSpaces.map((space, idx) => (
      <TextArea key={uid(space, idx)} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="4">
    {textAreaVariants.map((variant, idx) => (
      <TextArea key={uid(variant, idx)} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
