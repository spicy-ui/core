import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import styled, { useTheme } from 'styled-components';
import { position, PositionProps } from 'styled-system';
import { baseStyle } from '../../helpers';
import { Portal } from '../Portal';
import { OverlayIn, OverlayOut } from './keyframes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BackdropProps {}

const Backdrop = styled('div').withConfig<BackdropProps>({ shouldForwardProp })`
  ${baseStyle('components.Overlay')}
  ${position}

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

export interface OverlayProps extends PositionProps {
  children: (state: TransitionStatus) => React.ReactNode;
  /** Whether the overlay is open or not. */
  isOpen: boolean;
  /** Callback method to run when the overlay is clicked. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ children, isOpen, onClick, ...other }) => {
  let enter = 200;
  let exit = 300;

  const theme = useTheme();

  if (theme?.transitions?.duration) {
    enter = parseInt(theme?.transitions?.duration[200], 10);
    exit = parseInt(theme?.transitions?.duration[300], 10);
  }

  return (
    <Portal>
      <Transition appear in={isOpen} timeout={{ enter, exit }} unmountOnExit>
        {(state) => (
          <Backdrop data-overlay-state={state} onClick={onClick} {...other}>
            {children(state)}
          </Backdrop>
        )}
      </Transition>
    </Portal>
  );
};

Overlay.displayName = 'Overlay';

export { Overlay };
