import * as React from 'react';
import { uid } from 'react-uid';
import { Heading } from '..';

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    variant: {
      control: { type: 'select', options: headingVariants },
    },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Heading {...props}>The quick brown fox jumped over the lazy dog.</Heading>;
Simple.args = {
  variant: 'h2',
};

export const Variants = () => (
  <>
    {headingVariants.map((variant, idx) => (
      <Heading key={uid(variant, idx)} variant={variant}>
        {variant}: The quick brown fox jumped over the lazy dog.
      </Heading>
    ))}
  </>
);
