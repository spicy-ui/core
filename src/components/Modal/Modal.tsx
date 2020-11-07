import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { baseStyle, size as sizeVariant } from '../../helpers';
import { useKeyPress } from '../../hooks';
import { Overlay } from '../Overlay';
import { ModalIn, ModalOut } from './keyframes';

interface ModalWrapperProps extends Omit<ColorProps, 'color'> {
  size?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'size']);

const ModalWrapper = styled('div').withConfig<ModalWrapperProps>({ shouldForwardProp })`
  ${baseStyle('components.Modal')}
  ${sizeVariant('components.Modal')}
  ${color}

  &[data-modal-state='entering'],
  &[data-modal-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalIn};
    animation-duration: ${(p) => p.theme.transitions.duration['300']};
  }

  &[data-modal-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalOut};
    animation-duration: ${(p) => p.theme.transitions.duration['200']};
  }

  &[data-modal-state='entered'] {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export interface ModalProps extends Omit<ColorProps, 'color'> {
  /** Whether the modal is open or not. */
  isOpen: boolean;
  /** Callback method to close the modal. */
  onClose?: () => void;
  /** Set max size of the modal. */
  size?: string;
  /** Set to `true` to enable closing the modal by pushing the `Esc` key. */
  closeOnEsc?: boolean;
  /** Set to `true` to enable closing the modal by clicking the overlay. */
  closeOnOverlayClick?: boolean;
  /** Set to `true` to disable the modals focus trap behaviour. */
  disableFocusTrap?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  size = 'md',
  isOpen,
  closeOnEsc,
  closeOnOverlayClick,
  disableFocusTrap,
  onClose,
  ...other
}) => {
  useKeyPress('Escape', () => {
    if (isOpen && closeOnEsc && onClose) {
      onClose();
    }
  });

  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Prevent clicks inside the modal from closing it
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

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick} top={0} right={0} bottom={0} left={0}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
          <ModalWrapper size={size} role="dialog" aria-modal="true" data-modal-state={state} {...other}>
            {children}
          </ModalWrapper>
        </FocusLock>
      )}
    </Overlay>
  );
};
