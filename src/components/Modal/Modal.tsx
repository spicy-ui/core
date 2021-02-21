import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { useKeyPress } from '../../hooks';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, ChildrenProp, LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Overlay } from '../Overlay';

export type ModalSize =
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

export interface ModalProps extends AsProp, ChildrenProp, SxProp {
  isOpen: boolean;
  onClose?: () => void;
  size?: LiteralUnion<ModalSize>;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  disableFocusTrap?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, sx, isOpen, onClose, size, closeOnEsc, closeOnOverlayClick, disableFocusTrap, ...rest } = props;

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

Modal.defaultProps = {
  closeOnOverlayClick: true,
  size: 'md',
};

Modal.displayName = 'Modal';
