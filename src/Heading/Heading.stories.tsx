import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Heading, HeadingVariant, Stack } from '..';

const variants: HeadingVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Simple = () => <Heading variant={select('variant', variants, 'h2')}>Heading</Heading>;

export const AllVariants = () => (
  <Stack spacing="base">
    {variants.map((variant, idx) => (
      <Heading key={uid(variant, idx)} variant={variant}>
        {variant}: Heading
      </Heading>
    ))}
  </Stack>
);
