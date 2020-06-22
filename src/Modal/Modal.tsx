import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { Box } from '../Box';
import { Button } from '../Button';
import { useKeyPress } from '../hooks';
import { Overlay } from '../Overlay';
import { ModalWrapper } from './styled';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  children,
  size,
  isOpen,
  hideCloseButton,
  disableOverlayClick,
  disableListeners,
  disableFocusTrap,
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
    [disableOverlayClick, onClose],
  );

  React.useEffect(() => {
    if (isOpen && !document.body.classList.contains('noscroll')) {
      document.body.classList.add('noscroll');
    }

    return () => document.body.classList.remove('noscroll');
  }, [isOpen]);

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
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
      )}
    </Overlay>
  );
};

Modal.displayName = 'Modal';

export { Modal };
