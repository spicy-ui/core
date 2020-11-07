import * as React from 'react';
import { Box, Stack } from '..';

const stackOrientations = ['horizontal', 'vertical'];

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    isReversed: {
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'select', options: stackOrientations },
    },
    spacing: {
      control: { type: 'text' },
    },
    align: { table: { disable: true } },
    direction: { table: { disable: true } },
    justify: { table: { disable: true } },
    wrap: { table: { disable: true } },
    zIndex: { table: { disable: true } },
  },
};

export const Simple = (props: any) => (
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
