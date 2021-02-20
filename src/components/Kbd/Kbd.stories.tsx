import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Kbd, KbdProps, Text } from '..';

export default {
  title: 'Kbd',
  component: Kbd,
} as Meta<KbdProps>;

export const Usage: Story<KbdProps> = (props) => (
  <Text>
    <Kbd {...props}>ctrl</Kbd> + <Kbd {...props}>shift</Kbd> + <Kbd {...props}>v</Kbd>
  </Text>
);
