import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Stack, StackProps } from '..';

export default {
  title: 'Stack',
  component: Stack,
} as Meta<StackProps>;

export const Simple: Story<StackProps> = (props) => (
  <Stack {...props}>
    <Box p="2" bg="red.50">
      Box 1
    </Box>
    <Box p="2" bg="green.50">
      Box 2
    </Box>
    <Box p="2" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);
Simple.args = { spacing: 4 };

export const Responsive: Story<StackProps> = () => (
  <Stack direction={['column', 'row']} spacing={4}>
    <Box p="2" bg="red.50">
      Box 1
    </Box>
    <Box p="2" bg="green.50">
      Box 2
    </Box>
    <Box p="2" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);

export const WithDividers: Story<StackProps> = () => (
  <Stack divider={<Box borderBottom="1px" borderColor="gray.200" />} direction="column" spacing={4}>
    <Box p="2" bg="red.50">
      Box 1
    </Box>
    <Box p="2" bg="green.50">
      Box 2
    </Box>
    <Box p="2" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);

export const WrappedChildren: Story<StackProps> = () => (
  <Stack shouldWrapChildren direction="row" spacing={4}>
    <>line 1</>
    <>line 2</>
    <>line 3</>
  </Stack>
);
