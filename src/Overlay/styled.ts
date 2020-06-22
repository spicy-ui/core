import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const OverlayIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const OverlayOut = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Backdrop = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &::before {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(p) => rgba(p.theme.colors.black, 0.38)};
    content: ' ';
    visibility: hidden;
    opacity: 0;
  }

  &[data-overlay-state='entering'],
  &[data-overlay-state='entered'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayIn};
      animation-duration: ${(p) => p.theme.transitions.duration.entering}ms;
    }
  }

  &[data-overlay-state='exiting'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayOut};
      animation-duration: ${(p) => p.theme.transitions.duration.exiting}ms;
    }
  }

  &[data-overlay-state='entered'] {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;
