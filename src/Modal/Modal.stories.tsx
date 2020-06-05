import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from '..';
import { ModalSizes } from './types';

const modalSizes: ModalSizes[] = ['sm', 'md', 'lg'];

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
};

export const Simple = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal
        labelledById="stories-title"
        isOpen={isOpen}
        size={select('size', modalSizes, 'sm')}
        hideCloseButton={boolean('hide close button', false)}
        disableOverlayClick={boolean('disable overlay click', false)}
        disableListeners={boolean('disable escape key listener', false)}
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
      <button type="button" onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal labelledById="stories-title" isOpen={isOpen} hideCloseButton disableOverlayClick disableListeners>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi nihil voluptatibus aliquid
          provident, sapiente quam. Reiciendis vel animi odio odit! Expedita possimus accusamus quam, vel molestiae at
          asperiores repellendus!
        </ModalContent>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
