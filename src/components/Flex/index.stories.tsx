import * as React from 'react';
import { Flex } from '..';

export default {
  title: 'Flex',
  component: Flex,
  argTypes: {
    align: {
      control: { type: 'text' },
    },
    direction: {
      control: { type: 'text' },
    },
    justify: {
      control: { type: 'text' },
    },
    wrap: {
      control: { type: 'text' },
    },
    zIndex: { table: { disable: true } },
  },
};

export const Simple = (props: any) => (
  <Flex {...props}>
    <Flex bg="red.50" width="200px" height="200px" />
    <Flex bg="green.50" width="200px" height="200px" />
    <Flex bg="blue.50" width="200px" height="200px" />
  </Flex>
);
