import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { useKeyPress } from '../../hooks';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Overlay } from '../Overlay';

export type ModalSizes =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'full';

export interface ModalProps extends SxProps {
  isOpen: boolean;
  onClose?: () => void;
  size?: LiteralUnion<ModalSizes>;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  disableFocusTrap?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { sx, children, size, isOpen, closeOnEsc, closeOnOverlayClick, disableFocusTrap, onClose, ...rest } = props;

  useKeyPress('Escape', () => {
    if (isOpen && closeOnEsc && onClose) {
      onClose();
    }
  });

  const onOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (closeOnOverlayClick && onClose) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose],
  );

  React.useEffect(() => {
    if (isOpen && !document.body.classList.contains('noscroll')) {
      document.body.classList.add('noscroll');
    }

    return () => document.body.classList.remove('noscroll');
  }, [isOpen]);

  const style = useComponentStyles('Modal', props);

  return (
    <Overlay isOpen={isOpen} onClick={onOverlayClick}>
      <FocusLock disabled={disableFocusTrap || !isOpen}>
        <Box role="dialog" aria-modal="true" sx={style} {...rest}>
          {children}
        </Box>
      </FocusLock>
    </Overlay>
  );
};

Modal.defaultProps = { size: 'md' };

Modal.displayName = 'Modal';
