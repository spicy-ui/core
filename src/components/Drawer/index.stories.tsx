import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Button, Drawer, DrawerProps } from '..';

export default {
  title: 'Drawer',
  component: Drawer,
} as Meta<DrawerProps>;

export const Simple: Story<DrawerProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Drawer {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Box height="2000px" />
        </Box>
      </Drawer>
    </>
  );
};
