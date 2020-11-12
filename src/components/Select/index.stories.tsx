import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { uid } from 'react-uid';
import { Select, Stack } from '..';

const Options: React.FC<{ items?: string[] }> = ({ items = ['apples', 'bananas', 'oranges', 'pears'] }) => (
  <>
    {items.map((value, idx) => (
      <option key={uid(value, idx)} value={value}>
        {value}
      </option>
    ))}
  </>
);

const selectSpaces = ['xs', 'sm', 'md', 'lg'];

const selectVariants = ['outlined', 'filled', 'underlined', 'unstyled'];

export default {
  title: 'Select',
  component: Select,
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
      control: { type: 'select', options: selectSpaces },
    },
    variant: {
      control: { type: 'select', options: selectVariants },
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
  <Select {...props} onChange={({ target }) => action('onChange')(target.value)}>
    <Options />
  </Select>
);

export const AllSpaces = (props: any) => (
  <Stack spacing="4">
    {selectSpaces.map((space, idx) => (
      <Select key={uid(space, idx)} {...props} space={space} placeholder={space}>
        <Options />
      </Select>
    ))}
  </Stack>
);

export const AllVariants = (props: any) => (
  <Stack spacing="4">
    {selectVariants.map((variant, idx) => (
      <Select key={uid(variant, idx)} {...props} variant={variant} placeholder={variant}>
        <Options />
      </Select>
    ))}
  </Stack>
);
