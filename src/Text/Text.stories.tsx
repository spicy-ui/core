import * as React from 'react';
import { uid } from 'react-uid';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Simple = () => (
  <Text>
    This is a regular paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit,
    hendrerit consequat lectus. Pellentesque egestas mauris mollis.
  </Text>
);

export const Variants = () => (
  <>
    {['lead', 'body1', 'body2', 'small', 'code'].map((variant: any, idx) => (
      <Text key={uid(variant, idx)} variant={variant}>
        {variant}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit, hendrerit consequat
        lectus. Pellentesque egestas mauris mollis.
      </Text>
    ))}
  </>
);

export const SemanticText = () => (
  <>
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
  </>
);
