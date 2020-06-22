import { css as withSystem } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import styled, { css, CSSObject, DefaultTheme, keyframes, Keyframes } from 'styled-components';
import { Box, BoxProps } from '../Box';
import { useColorMode } from '../ColorMode';
import { DrawerAnchor, DrawerWrapperProps } from './types';

const TopIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TopOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translate(0, -25%);
  }
`;

const RightIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(25%, 0);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const RightOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translate(25%, 0);
  }
`;

const LeftIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-25%, 0);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const LeftOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translate(-25%, 0);
  }
`;

const BottomIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BottomOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translate(0, 25%);
  }
`;

const getDrawerAnimation = (anchor: DrawerAnchor): { in: Keyframes; out: Keyframes } => {
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

interface UseDrawerWrapperStyleProps extends DrawerWrapperProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

const color = ({ colorMode }: UseDrawerWrapperStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: 'gray.800',
    };
  }

  return {
    backgroundColor: 'white',
  };
};

const transform = ({ anchor }: UseDrawerWrapperStyleProps) => {
  switch (anchor) {
    case 'top':
      return { transform: 'translate(0, -25%)' };
    case 'right':
      return { transform: 'translate(25%, 0)' };
    case 'bottom':
      return { transform: 'translate(0, 25%)' };
    default:
      return { transform: 'translate(-25%, 0)' };
  }
};

const wrapperBaseStyles: CSSObject = {
  display: 'flex',
  boxShadow: '3',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100% - 24vmin)',
  opacity: 0,
  overflow: 'hidden',
};

const useDrawerWrapperStyle = (props: Omit<UseDrawerWrapperStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const drawerProps = { ...props, colorMode };

  return css(
    withSystem({
      ...wrapperBaseStyles,
      ...color(drawerProps),
      ...transform(drawerProps),
    })(props),
  );
};

const DrawerWrapper = styled(Box).withConfig<BoxProps & DrawerWrapperProps>({ shouldForwardProp })(
  useDrawerWrapperStyle,
  // This cannot be moved inside `useDrawerWrapperStyle` since we use `keyframes`.
  css`
    &[data-drawer-state='entering'],
    &[data-drawer-state='entered'] {
      animation-fill-mode: forwards;
      animation-name: ${(p) => getDrawerAnimation((p as any).anchor).in};
      animation-duration: ${(p) => p.theme.transitions.duration.entering}ms;
    }

    &[data-drawer-state='exiting'] {
      animation-fill-mode: forwards;
      animation-name: ${(p) => getDrawerAnimation((p as any).anchor).out};
      animation-duration: ${(p) => p.theme.transitions.duration.exiting}ms;
    }

    &[data-drawer-state='entered'] {
      opacity: 1;
      transform: translate(0, 0);
    }
  `,
);

DrawerWrapper.displayName = 'DrawerWrapper';

export { DrawerWrapper };
