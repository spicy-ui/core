import * as React from 'react';
import { Modal, Text } from '../';

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
