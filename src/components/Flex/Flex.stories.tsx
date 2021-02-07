import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Flex, FlexProps } from '..';

export default {
  title: 'Flex',
  component: Flex,
} as Meta<FlexProps>;

export const Simple: Story<FlexProps> = (props) => (
  <Flex {...props}>
    <Box flexGrow={1} p={2} bg="red.50">
      Box 1
    </Box>
    <Box flexGrow={1} p={2} bg="green.50">
      Box 2
    </Box>
    <Box flexGrow={1} p={2} bg="blue.50">
      Box 3
    </Box>
    <Box flexGrow={1} p={2} bg="orange.50">
      Box 4
    </Box>
    <Box flexGrow={1} p={2} bg="purple.50">
      Box 5
    </Box>
    <Box flexGrow={1} p={2} bg="pink.50">
      Box 6
    </Box>
  </Flex>
);
