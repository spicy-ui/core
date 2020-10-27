import { Placement } from '@popperjs/core';
import { array, boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Popover, Offset } from './Popover';

const placements: Placement[] = [
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
  decorators: [withKnobs],
};

export const Simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      trigger={<Button onClick={() => setIsOpen((prev) => !prev)}>Toggle Popover</Button>}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeOnBlur={boolean('close on blur', true)}
      closeOnEsc={boolean('close on escape key', false)}
      closeOnInnerClick={boolean('close on inner click', false)}
      closeOnOuterClick={boolean('close on outer click', false)}
      placement={select('placement', placements, 'bottom-start')}
      offset={array('offset', ['0', '10'], ',').map((n) => Number.parseInt(n, 10)) as Offset}
    >
      <Box p={2} bg="white" boxShadow="sm" borderRadius="sm">
        Hello world
      </Box>
    </Popover>
  );
};
