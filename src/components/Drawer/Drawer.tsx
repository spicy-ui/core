import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { useKeyPress } from '../../hooks';
import { SxProps, useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Overlay } from '../Overlay';

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';

export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg';

const getAnchor = (anchor?: DrawerAnchor) => {
  switch (anchor) {
    case 'top':
      return {
        top: 0,
        right: 0,
        bottom: 'unset',
        left: 0,
      };
    case 'right':
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 'unset',
      };
    case 'bottom':
      return {
        top: 'unset',
        right: 0,
        bottom: 0,
        left: 0,
      };
    default:
      return {
        top: 0,
        right: 'unset',
        bottom: 0,
        left: 0,
      };
  }
};

export interface DrawerProps extends SxProps {
  isOpen: boolean;
  onClose?: () => void;
  anchor?: DrawerAnchor;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  disableFocusTrap?: boolean;
  size?: LiteralUnion<DrawerSize>;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    sx,
    children,
    isOpen,
    onClose,
    anchor,
    closeOnEsc,
    closeOnOverlayClick,
    disableFocusTrap,
    size,
    ...rest
  } = props;

  useKeyPress('Escape', () => {
    if (isOpen && !closeOnEsc && onClose) {
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

  const style = useComponentStyles('Drawer', props);

  return (
    <Overlay isOpen={isOpen} onClick={onOverlayClick} sx={getAnchor(anchor)}>
      <FocusLock disabled={disableFocusTrap || !isOpen}>
        <Box role="dialog" aria-modal="true" sx={style} {...rest}>
          {children}
        </Box>
      </FocusLock>
    </Overlay>
  );
};

Drawer.defaultProps = {
  anchor: 'right',
  closeOnOverlayClick: true,
  size: 'xs',
};

Drawer.displayName = 'Drawer';
