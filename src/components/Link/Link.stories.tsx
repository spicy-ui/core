import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Link, LinkProps } from '..';

export default {
  title: 'Link',
  component: Link,
} as Meta<LinkProps>;

export const Simple: Story<LinkProps> = (props) => <Link {...props}>🌶️ Spicy UI</Link>;
