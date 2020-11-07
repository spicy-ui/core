import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, TextArea } from '..';

const textAreaSpaces = ['xs', 'sm', 'md', 'lg'];

const textAreaVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    isInvalid: {
      control: { type: 'boolean' },
    },
    space: {
      control: { type: 'select', options: textAreaSpaces },
    },
    variant: {
      control: { type: 'select', options: textAreaVariants },
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

export const Simple = (props: any) => (
  <TextArea {...props} onChange={({ target }) => action('onChange')(target.value)} />
);

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {textAreaSpaces.map((space, idx) => (
      <TextArea key={uid(space, idx)} {...props} space={space} placeholder={space} />
    ))}
  </Stack>
);

export const AllVariants = (props: any) => (
  <Stack spacing="4">
    {textAreaVariants.map((variant, idx) => (
      <TextArea key={uid(variant, idx)} {...props} variant={variant} placeholder={variant} />
    ))}
  </Stack>
);
