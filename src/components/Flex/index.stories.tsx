import * as React from 'react';
import { Flex, Box } from '..';

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
    <Box p={2} bg="red.50">
      Box 1
    </Box>
    <Box p={2} bg="green.50">
      Box 2
    </Box>
    <Box p={2} bg="blue.50">
      Box 3
    </Box>
    <Box p={2} bg="orange.50">
      Box 4
    </Box>
    <Box p={2} bg="purple.50">
      Box 5
    </Box>
    <Box p={2} bg="pink.50">
      Box 6
    </Box>
  </Flex>
);
