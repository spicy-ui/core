import * as React from 'react';
import { Link } from '..';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    color: { type: 'string' },
    hoverColor: { type: 'string' },
    // styled component props
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
};

export const Simple = (props: any) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link {...props} href="" onClick={(e) => e.preventDefault()}>
    🌶️ Spicy UI
  </Link>
);
