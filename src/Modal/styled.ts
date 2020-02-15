import styled, { keyframes } from 'styled-components';
import { get, variant } from 'styled-system';
import { rgba } from 'polished';
import { colors } from '../Theme/system/colors';
import { Box } from '../Box';
import { ModalSizes } from './utils/helpers';
import { ANIMATION_DURATION } from './utils/constants';

export interface SizeableModalProps {
  /** Set max size of the modal */
  modalSize?: ModalSizes;
}

const ModalIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

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

export const ModalOverlay = styled('div')`
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
    background-color: ${rgba(colors.black, 0.35)};
    content: ' ';
    visibility: hidden;
    opacity: 0;
  }

  &[data-state='entering'],
  &[data-state='entered'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayIn};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &[data-state='exiting'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayOut};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &.entered {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

ModalOverlay.displayName = 'ModalOverlay';

export const ModalWrapper = styled(Box)<SizeableModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${variant({ prop: 'modalSize', scale: 'componentStyles.modal.sizes' })}
  max-height: calc(100% - 24vmin);
  margin: ${p => get(p.theme.space.md, 'md')} 12vmin;
  opacity: 0;
  transform: translate(0, -25%);
  overflow: hidden;

  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalIn};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalOut};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &.entered {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

ModalWrapper.displayName = 'ModalWrapper';
