import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, Heading, HeadingProps } from '..';

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Heading',
  component: Heading,
} as Meta<HeadingProps>;

export const Simple: Story<HeadingProps> = (props) => (
  <Heading {...props}>The quick brown fox jumped over the lazy dog.</Heading>
);

export const Variants: Story<HeadingProps> = () => (
  <Stack spacing={4}>
    {headingVariants.map((variant, idx) => (
      <Heading variant={variant} key={uid(variant, idx)}>
        {variant}: The quick brown fox jumped over the lazy dog.
      </Heading>
    ))}
  </Stack>
);