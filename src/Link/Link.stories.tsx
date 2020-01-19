import * as React from 'react';
import Link from './Link';
import { Text } from '../Text';

export default {
  title: 'Link',
  component: Link,
};

export const Simple = () => <Link href="//example.com">🌶️ Spicy UI</Link>;

export const Inline = () => (
  <Text>
    Welcome to the hot world of{' '}
    <Link href="//example.com" color="blue.500">
      🌶️ Spicy UI
    </Link>
  </Text>
);
