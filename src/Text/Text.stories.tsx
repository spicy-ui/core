import * as React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const Simple = () => (
  <Text>
    This is a normal paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit,
    hendrerit consequat lectus. Pellentesque egestas mauris mollis.
  </Text>
);

export const Variants = () => (
  <>
    <Text variant="body1">
      body1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit, hendrerit consequat lectus.
      Pellentesque egestas mauris mollis.
    </Text>
    <Text variant="body2">
      body2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit, hendrerit consequat lectus.
      Pellentesque egestas mauris mollis.
    </Text>
    <Text variant="small">
      small: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non cursus velit, hendrerit consequat lectus.
      Pellentesque egestas mauris mollis.
    </Text>
  </>
);

export const SemanticText = () => (
  <>
    <Text>
      <strong>This text is strong</strong>
    </Text>
    <Text>
      <em>This text has emphasis</em>
    </Text>
    <Text>
      <small>This text is small</small>
    </Text>
  </>
);
