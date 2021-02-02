import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Input, InputProps, Stack } from '..';

export default {
  title: 'Input',
  component: Input,
} as Meta<InputProps>;

export const Simple: Story<InputProps> = (props) => (
  <Input {...props} onChange={({ target }) => action('onChange')(target.value)} />
);

export const AllSizes: Story<InputProps> = () => (
  <Stack spacing="4">
    <Input size="xs" placeholder="xs" />
    <Input size="sm" placeholder="sm" />
    <Input size="md" placeholder="md" />
    <Input size="lg" placeholder="lg" />
  </Stack>
);

export const AllVariants: Story<InputProps> = () => (
  <Stack spacing="4">
    <Input variant="outlined" placeholder="outlined" />
    <Input variant="filled" placeholder="filled" />
    <Input variant="underlined" placeholder="underlined" />
    <Input variant="unstyled" placeholder="unstyled" />
  </Stack>
);
