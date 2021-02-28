import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import { uid } from 'react-uid';
import { Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalProps, Stack, Text } from '..';
import { useDisclosure } from '../../hooks';

const lorem = loremIpsum({ p: 2 }).map((str, i) => <Text key={uid(str, i)}>{str}</Text>);

export default {
  title: 'Modal',
  component: Modal,
  subcomponents: { ModalHeader, ModalBody, ModalFooter, ModalCloseButton },
} as Meta<ModalProps>;

export const Usage: Story<ModalProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal {...props} isOpen={isOpen} onClose={onClose}>
        <ModalCloseButton onClick={onClose} />
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          <Stack spacing={2}>{lorem}</Stack>
        </ModalBody>
        <ModalFooter>
          <Button color="blue" sx={{ mr: 2 }}>
            Accept
          </Button>
          <Button>Decline</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
Usage.args = {
  closeOnOverlayClick: true,
};

export const AsAlertDialog: Story<ModalProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button color="red" onClick={onOpen}>
        Delete product
      </Button>

      <Modal {...props} isOpen={isOpen} onClose={onClose}>
        <ModalHeader>Delete product</ModalHeader>
        <ModalBody>Are you sure you want to delete this product?</ModalBody>
        <ModalFooter>
          <Button sx={{ mr: 2 }} onClick={onClose}>
            Cancel
          </Button>
          <Button color="red">Delete</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
AsAlertDialog.args = { closeOnOverlayClick: false };
