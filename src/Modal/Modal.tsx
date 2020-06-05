import * as React from 'react';
import FocusLock from 'react-focus-lock';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { Box } from '../Box';
import { Button } from '../Button';
import { useKeyPress } from '../hooks';
import { Portal } from '../Portal';
import { ModalOverlay, ModalWrapper } from './styled';
import { ModalProps } from './types';
import { ANIMATION_DURATION } from './utils/constants';

const Modal: React.FC<ModalProps> = ({
  children,
  size,
  isOpen,
  // noBackdrop, // TODO
  hideCloseButton,
  disableOverlayClick,
  disableListeners,
  // enableFocusTrap, // TODO
  labelledById,
  onClose,
}) => {
  useKeyPress('Escape', () => {
    if (isOpen && !disableListeners && onClose) {
      onClose();
    }
  });

  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Prevent clicking to exit inside the dialog
      if (e.target !== e.currentTarget) {
        return;
      }

      if (!disableOverlayClick && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    if (isOpen && !document.body.classList.contains('noscroll')) {
      document.body.classList.add('noscroll');
    }

    return () => document.body.classList.remove('noscroll');
  }, [isOpen]);

  return (
    <Portal>
      <Transition appear in={isOpen} timeout={{ enter: ANIMATION_DURATION, exit: ANIMATION_DURATION }} unmountOnExit>
        {(state: TransitionStatus) => (
          <ModalOverlay data-modal-state={state} onClick={handleOverlayClick}>
            <FocusLock disabled={!isOpen}>
              <ModalWrapper
                modalSize={size}
                boxShadow={3}
                borderRadius="xs"
                my="12vmin"
                mx="md"
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledById}
                data-modal-state={state}
              >
                {!hideCloseButton && onClose && (
                  <Box position="absolute" top="sm" right="md">
                    <Button type="button" variant="ghost" aria-label="Close" onClick={onClose}>
                      Close
                    </Button>
                  </Box>
                )}
                {children}
              </ModalWrapper>
            </FocusLock>
          </ModalOverlay>
        )}
      </Transition>
    </Portal>
  );
};

Modal.displayName = 'Modal';

export { Modal };

