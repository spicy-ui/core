import * as React from 'react';
import { Box, Stack } from '..';

export default {
  title: 'Stack',
  component: Stack,
};

export const Vertical = () => (
  <Stack spacing="4">
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

export const Horizontal = () => (
  <Stack orientation="horizontal" spacing="4">
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

export const Reversed = () => (
  <Stack isReversed spacing="4">
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

export const HorizontalReversed = () => (
  <Stack orientation="horizontal" isReversed spacing="4">
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
