import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, TextArea, TextAreaSpace, TextAreaVariant } from '..';

const textAreaSpaces: TextAreaSpace[] = ['xs', 'sm', 'md', 'lg'];

const textAreaVariants: TextAreaVariant[] = ['outlined', 'filled', 'unstyled'];

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [withKnobs],
};

export const Simple = () => (
  <TextArea
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', true)}
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
  <Stack spacing="base">
    {textAreaSpaces.map((space, idx) => (
      <TextArea key={uid(space, idx)} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {textAreaVariants.map((variant, idx) => (
      <TextArea key={uid(variant, idx)} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
