import * as React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Popover } from './Popover';

export default {
  title: 'Popover',
  component: Popover,
};

export const Simple = () => (
  <Popover trigger={<Button>Toggle Popover</Button>}>
    <Box mt={2} bg="white" boxShadow="sm" borderRadius="sm">
      Hello world
    </Box>
  </Popover>
);
