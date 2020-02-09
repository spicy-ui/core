import * as React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Modal, ModalHeader, ModalContent, ModalFooter, Button } from '../';
import { ModalSizes } from './utils/helpers';

const modalSizes: ModalSizes[] = ['sm', 'md', 'lg'];

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
};

export const Basic = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Modal
      </button>
      <Modal
        labelledById="stories-title"
        isOpen={isOpen}
        size={select('size', modalSizes, 'sm')}
        hideCloseButton={boolean('hide close button', false)}
        disableOverlayClick={boolean('disable overlay click', false)}
        onClose={() => setIsOpen(false)}
      >
        <ModalHeader>Modal Header</ModalHeader>
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi nihil voluptatibus aliquid
          provident, sapiente quam. Reiciendis vel animi odio odit! Expedita possimus accusamus quam, vel molestiae at
          asperiores repellendus!
        </ModalContent>
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
        <ModalHeader>Modal Header</ModalHeader>
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi nihil voluptatibus aliquid
          provident, sapiente quam. Reiciendis vel animi odio odit! Expedita possimus accusamus quam, vel molestiae at
          asperiores repellendus!
        </ModalContent>
        <ModalFooter>
          <Button onClick={() => setIsOpen(!isOpen)}>Close Modal</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
