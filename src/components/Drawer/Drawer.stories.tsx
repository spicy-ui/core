import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Button, Drawer, DrawerProps } from '..';
import { useDisclosure } from '../../hooks';

export default {
  title: 'Drawer',
  component: Drawer,
} as Meta<DrawerProps>;

export const Usage: Story<DrawerProps> = (props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Drawer {...props} isOpen={isOpen} onClose={onClose}>
        <Box>
          <Button onClick={onClose}>Close</Button>
          <Box height="2000px" />
        </Box>
      </Drawer>
    </>
  );
};
