import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Text, Kbd, KbdProps } from '..';

export default {
  title: 'Kbd',
  component: Kbd,
} as Meta<KbdProps>;

export const Simple: Story<KbdProps> = (props) => (
  <Text>
    <Kbd {...props}>ctrl</Kbd> + <Kbd {...props}>shift</Kbd> + <Kbd {...props}>v</Kbd>
  </Text>
);
