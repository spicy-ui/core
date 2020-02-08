import * as React from 'react';
import { Modal, Text } from '../';
import { Box } from '../Box';

export default {
  title: 'Modal',
  component: Modal,
};

export const Basic = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Text>Hello!</Text>
      </Modal>
    </>
  );
};

export const CustomCloseBehaviour = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" isOpen={isOpen} hideCloseButton>
        <Box>
          <Text as="p">Hello!</Text>
        </Box>
        <Box>
          <button onClick={() => setIsOpen(!isOpen)}>Close Modal</button>
        </Box>
      </Modal>
    </>
  );
};
