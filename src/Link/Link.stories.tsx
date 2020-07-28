import { boolean, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Link } from '..';

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Link
    href="//github.com/spicy-ui/core"
    isExternal={boolean('isExternal', true)}
    isDisabled={boolean('isDisabled', false)}
    target="_blank"
  >
    🌶️ Spicy UI
  </Link>
);
