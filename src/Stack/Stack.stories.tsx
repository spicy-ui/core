import * as React from 'react';
import { Box } from '../Box';
import Stack from './Stack';

export default {
  title: 'Stack',
  component: Stack,
};

export const Vertical = () => (
  <Stack spacing="base">
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 1
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 2
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 3
    </Box>
  </Stack>
);

export const Horizontal = () => (
  <Stack orientation="horizontal" spacing="base">
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 1
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 2
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 3
    </Box>
  </Stack>
);

export const Reversed = () => (
  <Stack isReversed spacing="base">
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 1
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 2
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 3
    </Box>
  </Stack>
);

export const HorizontalReversed = () => (
  <Stack orientation="horizontal" isReversed spacing="base">
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 1
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 2
    </Box>
    <Box p="xs" border="1px solid" borderColor="gray.200" borderRadius="sm">
      Box 3
    </Box>
  </Stack>
);
