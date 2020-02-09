import * as React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Modal, Text } from '../';
import { Box } from '../Box';
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
