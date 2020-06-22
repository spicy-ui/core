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
    <Overlay isOpen={isOpen} onClick={handleOverlayClick} top={0} right={0} bottom={0} left={0}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
          <ModalWrapper modalSize={size} role="dialog" aria-modal="true" data-modal-state={state}>
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
