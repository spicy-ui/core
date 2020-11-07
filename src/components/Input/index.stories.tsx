import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { uid } from 'react-uid';
import { Input, Stack } from '..';

const inputSpaces = ['xs', 'sm', 'md', 'lg'];

const inputVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    space: {
      control: { type: 'select', options: inputSpaces },
    },
    variant: {
      control: { type: 'select', options: inputVariants },
    },
    transitionDelay: { table: { disable: true } },
    transitionDuration: { table: { disable: true } },
    transitionProperty: { table: { disable: true } },
    transitionTiming: { table: { disable: true } },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Input {...props} onChange={({ target }) => action('onChange')(target.value)} />;

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {inputSpaces.map((space, idx) => (
      <Input key={uid(space, idx)} {...props} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = (props: any) => (
  <Stack spacing="4">
    {inputVariants.map((variant, idx) => (
      <Input key={uid(variant, idx)} {...props} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
