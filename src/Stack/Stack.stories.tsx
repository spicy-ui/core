import * as React from 'react';
import { Box, Stack } from '../';

export default {
  title: 'Stack',
  component: Stack,
};

export const Vertical = () => (
  <Stack spacing="base">
    <Box p="xs" bg="red.50">
      Box 1
    </Box>
    <Box p="xs" bg="green.50">
      Box 2
    </Box>
    <Box p="xs" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);

export const Horizontal = () => (
  <Stack orientation="horizontal" spacing="base">
    <Box p="xs" bg="red.50">
      Box 1
    </Box>
    <Box p="xs" bg="green.50">
      Box 2
    </Box>
    <Box p="xs" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);

export const Reversed = () => (
  <Stack isReversed spacing="base">
    <Box p="xs" bg="red.50">
      Box 1
    </Box>
    <Box p="xs" bg="green.50">
      Box 2
    </Box>
    <Box p="xs" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);

export const HorizontalReversed = () => (
  <Stack orientation="horizontal" isReversed spacing="base">
    <Box p="xs" bg="red.50">
      Box 1
    </Box>
    <Box p="xs" bg="green.50">
      Box 2
    </Box>
    <Box p="xs" bg="blue.50">
      Box 3
    </Box>
  </Stack>
);
