import * as React from 'react';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { Portal } from '../Portal';
import { useTheme } from '../ThemeProvider';
import { baseStyle, withColorMode } from '../util';
import { OverlayIn, OverlayOut } from './keyframes';

const Backdrop = styled(Box)`
  ${withColorMode(baseStyle('components.Overlay'))}

  &[data-overlay-state='entering'],
  &[data-overlay-state='entered'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayIn};
      animation-duration: ${(p) => p.theme.transitions.duration['300']};
    }
  }

  &[data-overlay-state='exiting'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayOut};
      animation-duration: ${(p) => p.theme.transitions.duration['200']};
    }
  }

  &[data-overlay-state='entered'] {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export interface OverlayProps extends BoxProps {
  children: (state: TransitionStatus) => React.ReactNode;
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ children, isOpen, onClick, ...props }) => {
  const {
    transitions: { duration },
  } = useTheme();

  return (
    <Portal>
      <Transition
        appear
        in={isOpen}
        timeout={{
          enter: Number.parseInt(duration['300'], 10),
          exit: Number.parseInt(duration['200'], 10),
        }}
        unmountOnExit
      >
        {(state) => (
          <Backdrop data-overlay-state={state} onClick={onClick} {...props}>
            {children(state)}
          </Backdrop>
        )}
      </Transition>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';

export { Overlay };
