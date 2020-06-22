import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { Box } from '../Box';
import { useKeyPress } from '../hooks';
import { Overlay } from '../Overlay';
import { DrawerWrapper } from './styled';
import { DrawerAnchor, DrawerProps } from './types';

const getAnchor = (anchor: DrawerAnchor) => {
  switch (anchor) {
    case 'top':
      return { top: 0, right: 0, left: 0 };
    case 'right':
      return { top: 0, right: 0, bottom: 0 };
    case 'bottom':
      return { right: 0, bottom: 0, left: 0 };
    default:
      return { top: 0, bottom: 0, left: 0 };
  }
};

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  anchor = 'left',
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
      // Prevent clicking inside the dialog exiting it
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
    <Overlay isOpen={isOpen} onClick={handleOverlayClick} {...getAnchor(anchor)}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
          <DrawerWrapper anchor={anchor} role="dialog" aria-modal="true" data-drawer-state={state}>
            <Box
              height={['left', 'right'].includes(anchor) ? '100vh' : undefined}
              width={['top', 'bottom'].includes(anchor) ? '100vw' : undefined}
            >
              {children}
            </Box>
          </DrawerWrapper>
        </FocusLock>
      )}
    </Overlay>
  );
};

Drawer.displayName = 'Drawer';

export { Drawer };
