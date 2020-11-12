import { Placement } from '@popperjs/core';
import * as React from 'react';
import { Box, Button, Popover } from '..';

const popoverPlacements: Placement[] = [
  'auto',
  'auto-end',
  'auto-start',
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'right',
  'right-end',
  'right-start',
  'top',
  'top-end',
  'top-start',
];

export default {
  title: 'Popover',
  component: Popover,
  argTypes: {
    placement: { type: 'select', options: popoverPlacements },
  },
};

export const Simple = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      {...props}
      trigger={<Button onClick={() => setIsOpen((prev) => !prev)}>Open</Button>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Box p={2} bg="white" boxShadow="sm" borderRadius="sm">
        Hello world
      </Box>
    </Popover>
  );
};
