import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Box, Button, Drawer, DrawerAnchor } from '..';

const drawerAnchors: DrawerAnchor[] = ['left', 'right', 'top', 'bottom'];

const drawerSizes = ['xs', 'sm', 'md', 'lg'];

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Drawer
    isOpen
    anchor={select('anchor', drawerAnchors, 'right')}
    size={select('size', drawerSizes, 'xs')}
    onClose={action('onClose')}
    disableOverlayClick={boolean('disable overlay click', false)}
    disableListeners={boolean('disable escape key listener', false)}
    disableFocusTrap={boolean('disable drawer focus trap', false)}
  >
    <Box>
      Drawer
      <Box height="2000px" />
    </Box>
  </Drawer>
);

export const Toggle = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Toggle drawer</Button>
      <Drawer
        isOpen={isOpen}
        anchor={select('anchor', drawerAnchors, 'right')}
        size={select('size', drawerSizes, 'xs')}
        onClose={() => setIsOpen(false)}
        disableOverlayClick={boolean('disable overlay click', false)}
        disableListeners={boolean('disable escape key listener', false)}
        disableFocusTrap={boolean('disable drawer focus trap', false)}
      >
        Drawer
      </Drawer>
    </>
  );
};
