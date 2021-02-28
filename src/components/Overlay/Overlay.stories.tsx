import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Button, Overlay, OverlayProps, Text } from '..';
import { useDisclosure } from '../../hooks';

export default {
  title: 'Overlay',
  component: Overlay,
} as Meta<OverlayProps>;

export const Usage: Story<OverlayProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Overlay isOpen={isOpen} onClick={onClose}>
        <Text>Overlay inner</Text>
      </Overlay>
    </>
  );
};
