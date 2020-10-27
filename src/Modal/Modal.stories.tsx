import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { Button, Modal } from '..';

const modalSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full'];

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Modal
    isOpen
    onClose={action('onClose')}
    size={select('size', modalSizes, 'sm')}
    closeOnEsc={boolean('disable escape key listener', false)}
    closeOnOverlayClick={boolean('disable overlay click', false)}
    disableFocusTrap={boolean('disable modal focus trap', false)}
  >
    Modal
  </Modal>
);

export const Toggle = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Toggle modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={select('size', modalSizes, 'sm')}
        closeOnEsc={boolean('disable escape key listener', false)}
        closeOnOverlayClick={boolean('disable overlay click', false)}
        disableFocusTrap={boolean('disable modal focus trap', false)}
      >
        Modal
      </Modal>
    </>
  );
};
