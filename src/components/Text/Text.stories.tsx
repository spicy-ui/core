import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, Text, TextVariant, TextProps } from '..';

const textVariants: TextVariant[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
];

export default {
  title: 'Text',
  component: Text,
} as Meta<TextProps>;

export const Usage: Story<TextProps> = (props) => <Text {...props}>The quick brown fox jumped over the lazy dog.</Text>;

export const Variants: Story<TextProps> = () => (
  <Stack spacing={4}>
    {textVariants.map((variant, idx) => (
      <Text variant={variant} key={uid(variant, idx)}>
        {variant}: The quick brown fox jumped over the lazy dog.
      </Text>
    ))}
  </Stack>
);

export const SemanticText: Story<TextProps> = () => (
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
    ].map(({ as, label }, idx) => (
      <Text as={as as any} key={uid(label, idx)}>
        {label}
      </Text>
    ))}
  </Stack>
);
