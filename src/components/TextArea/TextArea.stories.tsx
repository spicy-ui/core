import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Stack, TextArea, TextAreaProps } from '..';

export default {
  title: 'TextArea',
  component: TextArea,
} as Meta<TextAreaProps>;

export const Simple: Story<TextAreaProps> = (props) => (
  <TextArea {...props} onChange={({ target }) => action('onChange')(target.value)} />
);

export const AllSizes: Story<TextAreaProps> = () => (
  <Stack spacing="4">
    <TextArea size="xs" placeholder="xs" />
    <TextArea size="sm" placeholder="sm" />
    <TextArea size="md" placeholder="md" />
    <TextArea size="lg" placeholder="lg" />
  </Stack>
);

export const AllVariants: Story<TextAreaProps> = () => (
  <Stack spacing="4">
    <TextArea variant="outlined" placeholder="outlined" />
    <TextArea variant="filled" placeholder="filled" />
    <TextArea variant="underlined" placeholder="underlined" />
    <TextArea variant="unstyled" placeholder="unstyled" />
  </Stack>
);
