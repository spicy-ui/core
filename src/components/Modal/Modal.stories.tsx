import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { Box, Button, Modal, ModalProps } from '..';

export default {
  title: 'Modal',
  component: Modal,
} as Meta<ModalProps>;

export const Simple: Story<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Box>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};
Simple.args = { closeOnOverlayClick: true };
