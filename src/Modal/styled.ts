import { css as withSystem } from '@styled-system/css';
import { createShouldForwardProp, props as forwardProps } from '@styled-system/should-forward-prop';
import styled, { css, CSSObject, DefaultTheme, keyframes } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { useColorMode } from '../ColorMode';
import { ModalWrapperProps } from './types';

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

interface UseModalWrapperStyleProps extends ModalWrapperProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

const color = (props: UseModalWrapperStyleProps) => {
  if (props.colorMode === 'dark') {
    return {
      backgroundColor: 'gray.800',
    };
  }

  return {
    backgroundColor: 'white',
  };
};

const sizes = (props: UseModalWrapperStyleProps) => {
  switch (props.modalSize) {
    case 'lg': {
      return { maxWidth: 'container.lg' };
    }
    case 'md': {
      return { maxWidth: 'container.md' };
    }
    default: {
      return { maxWidth: 'container.sm' };
    }
  }
};

const baseStyles: CSSObject = {
  my: '12vmin',
  mx: 'md',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100% - 24vmin)',
  borderRadius: 'xs',
  boxShadow: '3',
  opacity: 0,
  transform: 'translate(0, -25%)',
  overflow: 'hidden',
};

const useModalWrapperStyle = (props: Omit<UseModalWrapperStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const modalProps = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles,
      ...sizes(modalProps),
      ...color(modalProps),
    })(props),
  );
};

const shouldForwardProp = createShouldForwardProp([...forwardProps, 'modalSize']);

const ModalWrapper = styled(Box).withConfig<BoxProps & ModalWrapperProps>({ shouldForwardProp })(
  useModalWrapperStyle,
  // This cannot be moved inside `useModalWrapperStyle` since we use `keyframes`.
  css`
    &[data-modal-state='entering'],
    &[data-modal-state='entered'] {
      animation-fill-mode: forwards;
      animation-name: ${ModalIn};
      animation-duration: ${(p) => p.theme.transitions.duration.entering}ms;
    }

    &[data-modal-state='exiting'] {
      animation-fill-mode: forwards;
      animation-name: ${ModalOut};
      animation-duration: ${(p) => p.theme.transitions.duration.exiting}ms;
    }

    &[data-modal-state='entered'] {
      opacity: 1;
      transform: translate(0, 0);
    }
  `,
);

ModalWrapper.displayName = 'ModalWrapper';

export { ModalWrapper };
