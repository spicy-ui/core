import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Stack, Text, TextVariant } from '../';

const variants: TextVariant[] = ['lead', 'body1', 'body2'];

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Text variant={select('variant', variants, 'body1')}>
    This is a regular paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit,
    hendrerit consequat lectus. Pellentesque egestas mauris mollis.
  </Text>
);

export const AllVariants = () => (
  <Stack spacing="base">
    {variants.map((variant, idx) => (
      <Text key={uid(variant, idx)} variant={variant}>
        {variant}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit, hendrerit consequat
        lectus. Pellentesque egestas mauris mollis.
      </Text>
    ))}
  </Stack>
);

export const SemanticTextExamples = () => (
  <Stack spacing="base">
    {[
      { as: 'em', label: 'Emphasis' },
      { as: 'strong', label: 'Strong' },
      { as: 'small', label: 'Small' },
      { as: 'code', label: '&lt;div /&gt;' },
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
