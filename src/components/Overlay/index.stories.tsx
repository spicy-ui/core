import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Button, Overlay, Text } from '..';
import { OverlayProps } from './Overlay';

export default {
  title: 'Overlay',
  component: Overlay,
} as Meta<OverlayProps>;

export const Simple: Story<OverlayProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <Text>Overlay inner</Text>
      </Overlay>
    </>
  );
};
