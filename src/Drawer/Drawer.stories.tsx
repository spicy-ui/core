import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Box, Drawer, DrawerAnchor } from '..';

const drawerSizes: DrawerAnchor[] = ['left', 'right', 'top', 'bottom'];

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [withKnobs],
};

export const Simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Toggle Drawer
      </button>
      <Drawer
        isOpen={isOpen}
        anchor={select('anchor', drawerSizes, 'left')}
        onClose={() => setIsOpen(false)}
        disableOverlayClick={boolean('disable overlay click', false)}
        disableListeners={boolean('disable escape key listener', false)}
        disableFocusTrap={boolean('disable drawer focus trap', false)}
      >
        <Box width="container.xs" height="full">
          drawer
        </Box>
      </Drawer>
    </>
  );
};
