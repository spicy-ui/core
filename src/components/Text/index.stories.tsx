import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, Text } from '..';

const textVariants = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'select', options: textVariants },
    },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => <Text {...props}>The quick brown fox jumped over the lazy dog.</Text>;
Simple.args = {
  variant: 'md',
};

const reversedVariants = [...textVariants].reverse();

export const Variants = () => (
  <Stack spacing={4}>
    {reversedVariants.map((variant, idx) => (
      <Text key={uid(variant, idx)} variant={variant}>
        {variant}: The quick brown fox jumped over the lazy dog.
      </Text>
    ))}
  </Stack>
);

export const SemanticText = () => (
  <Stack spacing={4}>
    {[
      { as: 'a', label: 'Link' },
      { as: 'em', label: 'Emphasis' },
      { as: 'strong', label: 'Strong' },
      { as: 'small', label: 'Small' },
      { as: 'code', label: '<div>hello world</div>' },
      { as: 'abbr', label: 'I18N' },
      { as: 'cite', label: 'Citation' },
      { as: 'del', label: 'Deleted' },
      { as: 'ins', label: 'Inserted' },
      { as: 'kbd', label: 'Ctrl + C' },
      { as: 'mark', label: 'Highlighted' },
      { as: 's', label: 'Strikethrough' },
      { as: 'samp', label: 'Sample' },
      { as: 'sub', label: 'sub' },
      { as: 'sup', label: 'sup' },
    ].map(({ as: As, label }: any, idx) => (
      <Text key={uid(label, idx)}>
        <As>{label}</As>
      </Text>
    ))}
  </Stack>
);
