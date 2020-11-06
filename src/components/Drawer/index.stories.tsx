import * as React from 'react';
import { Box, Button, Drawer, DrawerAnchor } from '..';

const drawerAnchors: DrawerAnchor[] = ['left', 'right', 'top', 'bottom'];

const drawerSizes = ['xs', 'sm', 'md', 'lg'];

export default {
  title: 'Drawer',
  component: Drawer,
  argTypes: {
    anchor: {
      control: { type: 'select', options: drawerAnchors },
    },
    size: {
      control: { type: 'select', options: drawerSizes },
    },
  },
};

export const Simple = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
        <Box>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Box height="2000px" />
        </Box>
      </Drawer>
    </>
  );
};
