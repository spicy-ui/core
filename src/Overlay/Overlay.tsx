import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { Portal } from '../Portal';
import { useTheme } from '../Theme';
import { Backdrop } from './styled';
import { OverlayProps } from './types';

const Overlay: React.FC<OverlayProps> = ({ children, isOpen, onClick }) => {
  const {
    transitions: {
      duration: { entering, exiting },
    },
  } = useTheme();

  return (
    <Portal>
      <Transition appear in={isOpen} timeout={{ enter: entering, exit: exiting }} unmountOnExit>
        {(state) => (
          <Backdrop data-overlay-state={state} onClick={onClick}>
            {children(state)}
          </Backdrop>
        )}
      </Transition>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';

export { Overlay };
