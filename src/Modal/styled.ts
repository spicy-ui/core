import { css as withSystem } from '@styled-system/css';
import { rgba } from 'polished';
import styled, { css, CSSObject, DefaultTheme, keyframes } from 'styled-components';
import { Box } from '../Box';
import { useColorMode } from '../ColorMode';
import { colors } from '../Theme/system/colors';
import { ModalWrapperProps } from './types';
import { ANIMATION_DURATION } from './utils/constants';

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

  &[data-modal-state='entering'],
  &[data-modal-state='entered'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayIn};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &[data-modal-state='exiting'] {
    &::before {
      animation-fill-mode: forwards;
      animation-name: ${OverlayOut};
      animation-duration: ${ANIMATION_DURATION}ms;
    }
  }

  &[data-modal-state='entered'] {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

ModalOverlay.displayName = 'ModalOverlay';

interface useModalWrapperStyleProps extends ModalWrapperProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

const color = (props: useModalWrapperStyleProps) => {
  if (props.colorMode === 'dark') {
    return {
      backgroundColor: 'gray.800',
    };
  }

  return {
    backgroundColor: 'white',
  };
};

const sizes = (props: useModalWrapperStyleProps) => {
  // TODO: use `props.theme.size` so modals are customisable
  switch (props.modalSize) {
    case 'sm': {
      return { maxWidth: '500px' };
    }
    case 'md': {
      return { maxWidth: '600px' };
    }
    case 'lg': {
      return { maxWidth: '900px' };
    }
    default: {
      return { maxWidth: '500px' };
    }
  }
};

const baseStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100% - 24vmin)',
  opacity: 0,
  transform: 'translate(0, -25%)',
  overflow: 'hidden',
};

const useModalWrapperStyle = (props: Omit<useModalWrapperStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const _props = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles,
      ...sizes(_props),
      ...color(_props),
    })(props),
  );
};

// TODO: animation duration should come from the `props.theme.timings`
export const ModalWrapper = styled(Box)<ModalWrapperProps>(
  useModalWrapperStyle,
  // This cannot be moved inside `useModalWrapperStyle` since we use `keyframes`.
  css`
    &[data-modal-state='entering'],
    &[data-modal-state='entered'] {
      animation-fill-mode: forwards;
      animation-name: ${ModalIn};
      animation-duration: ${ANIMATION_DURATION}ms;
    }

    &[data-modal-state='exiting'] {
      animation-fill-mode: forwards;
      animation-name: ${ModalOut};
      animation-duration: ${ANIMATION_DURATION}ms;
    }

    &[data-modal-state='entered'] {
      opacity: 1;
      transform: translate(0, 0);
    }
  `,
);

ModalWrapper.displayName = 'ModalWrapper';
