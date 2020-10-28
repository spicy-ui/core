import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import styled, { css } from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { useKeyPress } from '../hooks';
import { Overlay } from '../Overlay';
import { baseStyle, size as sizeUtil, withColorMode } from '../util';
import { BottomIn, BottomOut, LeftIn, LeftOut, RightIn, RightOut, TopIn, TopOut } from './keyframes';

export type DrawerAnchor = 'top' | 'right' | 'bottom' | 'left';

const getDrawerAnimation = (anchor: DrawerAnchor) => {
  switch (anchor) {
    case 'top':
      return { in: TopIn, out: TopOut };
    case 'right':
      return { in: RightIn, out: RightOut };
    case 'bottom':
      return { in: BottomIn, out: BottomOut };
    default:
      return { in: LeftIn, out: LeftOut };
  }
};

interface DrawerWrapperProps {
  anchor: DrawerAnchor;
  size: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'anchor', 'size']);

const DrawerWrapper = styled('div').withConfig<DrawerWrapperProps>({ shouldForwardProp })(
  (p) =>
    css({
      ...withColorMode(baseStyle('components.Drawer'))(p),
      ...withColorMode(sizeUtil('components.Drawer'))(p),
      ...color(p),
    }),
  css<DrawerWrapperProps>`
    &[data-drawer-state='entering'],
    &[data-drawer-state='entered'] {
      animation-fill-mode: forwards;
      animation-name: ${(p) => getDrawerAnimation(p.anchor).in};
      animation-duration: ${(p) => p.theme.transitions.duration['300']};
    }

    &[data-drawer-state='exiting'] {
      animation-fill-mode: forwards;
      animation-name: ${(p) => getDrawerAnimation(p.anchor).out};
      animation-duration: ${(p) => p.theme.transitions.duration['200']};
    }

    &[data-drawer-state='entered'] {
      opacity: 1;
      transform: translate(0, 0);
    }
  `,
);

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

export interface DrawerProps extends Omit<ColorProps, 'color'> {
  /** Whether the drawer is open or not. */
  isOpen: boolean;
  /** Callback method to close the drawer. */
  onClose?: () => void;
  /** Side that the drawer will appear from. */
  anchor?: DrawerAnchor;
  /** Size of the drawer. */
  size?: string;
  /** Set to `true` to enable closing the drawer by pushing the `Esc` key. */
  closeOnEsc?: boolean;
  /** Set to `true` to enable closing the modal by clicking the overlay. */
  closeOnOverlayClick?: boolean;
  /** Set to `true` to disable the drawers focus trap behaviour. */
  disableFocusTrap?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  anchor = 'right',
  size = 'xs',
  closeOnEsc,
  closeOnOverlayClick,
  disableFocusTrap,
  onClose,
  ...other
}) => {
  useKeyPress('Escape', () => {
    if (isOpen && !closeOnEsc && onClose) {
      onClose();
    }
  });

  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Prevent clicks inside the drawer from closing it
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
    <Overlay isOpen={isOpen} onClick={handleOverlayClick} {...getAnchor(anchor)}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
          <DrawerWrapper
            anchor={anchor}
            size={size}
            role="dialog"
            aria-modal="true"
            data-drawer-state={state}
            {...other}
          >
            {children}
          </DrawerWrapper>
        </FocusLock>
      )}
    </Overlay>
  );
};

Drawer.displayName = 'Drawer';

export { Drawer };
