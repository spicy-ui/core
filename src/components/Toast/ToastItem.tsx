import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import { Transition } from 'react-transition-group';
import styled, { useTheme } from 'styled-components';
import { baseStyle } from '../../helpers';
import { Box, BoxProps } from '../Box';
import { ToastPlacement } from './types';
import {
  BottomLeftIn,
  BottomLeftOut,
  BottomRightIn,
  BottomRightOut,
  TopLeftIn,
  TopLeftOut,
  TopRightIn,
  TopRightOut,
} from './keyframes';

const getToastAnimation = (anchor: ToastPlacement) => {
  switch (anchor) {
    case 'top-left':
      return { in: TopLeftIn, out: TopLeftOut };
    case 'top-right':
      return { in: TopRightIn, out: TopRightOut };
    case 'bottom-left':
      return { in: BottomLeftIn, out: BottomLeftOut };
    case 'bottom-right':
      return { in: BottomRightIn, out: BottomRightOut };
    default:
      throw new Error(`Unknown toast animation '${anchor}'`);
  }
};

const StyledToastItem = styled(Box).withConfig<{ placement: ToastPlacement } & BoxProps>({ shouldForwardProp })`
  ${baseStyle('components.ToastItem')}

  &[data-toast-state='entering'],
  &[data-toast-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${(p) => getToastAnimation(p.placement).in};
    animation-duration: ${(p) => p.theme.transitions.duration[200]};
  }

  &[data-toast-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${(p) => getToastAnimation(p.placement).out};
    animation-duration: ${(p) => p.theme.transitions.duration[300]};
  }

  &[data-toast-state='entered'] {
    opacity: 1;
  }
`;

export interface ToastItemProps {
  isOpen: boolean;
  duration: number;
  persist: boolean;
  placement: ToastPlacement;
  onClose: () => void;
  onRemove: () => void;
}

export const ToastItem: React.FC<ToastItemProps> = ({
  children,
  isOpen,
  duration,
  persist,
  placement,
  onClose,
  onRemove,
}) => {
  let enter = 200;
  let exit = 300;

  const theme = useTheme();

  if (theme?.transitions?.duration) {
    enter = parseInt(theme?.transitions?.duration[200], 10);
    exit = parseInt(theme?.transitions?.duration[300], 10);
  }

  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!closeTimer.current && !persist) {
      closeTimer.current = setTimeout(() => {
        onClose();
      }, duration);
    }
  }, [duration, onClose, persist]);

  React.useEffect(() => {
    return () => (closeTimer.current ? clearTimeout(closeTimer.current) : undefined);
  }, []);

  return (
    <Transition appear in={isOpen} timeout={{ enter, exit }} unmountOnExit onExited={onRemove}>
      {(state) => (
        <StyledToastItem data-toast-state={state} placement={placement}>
          {children}
        </StyledToastItem>
      )}
    </Transition>
  );
};
