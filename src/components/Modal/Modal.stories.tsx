import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import { uid } from 'react-uid';
import { Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalProps, Stack, Text } from '..';

const lorem = loremIpsum({ p: 2 }).map((str, i) => <Text key={uid(str, i)}>{str}</Text>);

export default {
  title: 'Modal',
  component: Modal,
  subcomponents: { ModalHeader, ModalBody, ModalFooter, ModalCloseButton },
} as Meta<ModalProps>;

export const Simple: Story<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalCloseButton onClick={() => setIsOpen(false)} />
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
Simple.args = { closeOnOverlayClick: true };

export const AsAlertDialog: Story<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button color="red" onClick={() => setIsOpen(true)}>
        Delete product
      </Button>

      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Delete product</ModalHeader>
        <ModalBody>Are you sure you want to delete this product?</ModalBody>
        <ModalFooter>
          <Button ref={cancelRef} sx={{ mr: 2 }} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button color="red">Delete</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
AsAlertDialog.args = { closeOnOverlayClick: false };
