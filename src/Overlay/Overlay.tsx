import shouldForwardProp from '@styled-system/should-forward-prop';
import * as React from 'react';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import styled, { css } from 'styled-components';
import { position, PositionProps } from 'styled-system';
import { Portal } from '../Portal';
import { useTheme } from '../ThemeProvider';
import { baseStyle, withColorMode } from '../util';
import { OverlayIn, OverlayOut } from './keyframes';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BackdropProps {}

const Backdrop = styled('div').withConfig<BackdropProps>({ shouldForwardProp })(
  (p) =>
    css({
      ...withColorMode(baseStyle('components.Overlay'))(p),
      ...position(p),
    }),
  css`
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
  `,
);

export interface OverlayProps extends PositionProps {
  children: (state: TransitionStatus) => React.ReactNode;
  /** Whether the overlay is open or not. */
  isOpen: boolean;
  /** Callback method to run when the overlay is clicked. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<OverlayProps> = ({ children, isOpen, onClick, ...other }) => {
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
