import { css as withSystem } from '@styled-system/css';
import { darken, rgba } from 'polished';
import { css, DefaultTheme } from 'styled-components';
import { get, space, width } from 'styled-system';
import { useColorMode } from '../ColorMode';
import { ButtonProps } from './Button';

const filled = ({ color, colorMode, theme }: useButtonStyleProps) => {
  const bg =
    colorMode === 'dark' && color === 'gray' ? get(theme.colors, `gray.50`) : get(theme.colors, `${color}.500`);

  const isReversed = ['yellow', 'cyan'].includes(color as string) || (colorMode === 'dark' && color === 'gray');

  const style = {
    backgroundColor: bg,
    color: isReversed ? 'text.base' : 'text.inverse',
    ':hover': {
      backgroundColor: darken(0.075, bg),
    },
    ':active': {
      backgroundColor: darken(0.15, bg),
    },
  };

  return style;
};

const outlined = ({ color, colorMode, theme }: useButtonStyleProps) => {
  const bg =
    colorMode === 'dark' && color === 'gray' ? get(theme.colors, `gray.50`) : get(theme.colors, `${color}.500`);

  const style = {
    backgroundColor: 'transparent',
    border: '2px solid currentColor',
    color: bg,
    ':hover': {
      backgroundColor: rgba(bg, 0.075),
    },
    ':active': {
      backgroundColor: rgba(bg, 0.15),
    },
  };

  return style;
};

const ghost = ({ color, colorMode, theme }: useButtonStyleProps) => {
  const bg =
    colorMode === 'dark' && color === 'gray' ? get(theme.colors, `gray.50`) : get(theme.colors, `${color}.500`);

  const style = {
    backgroundColor: 'transparent',
    color: bg,
    ':hover': {
      backgroundColor: rgba(bg, 0.075),
    },
    ':active': {
      backgroundColor: rgba(bg, 0.15),
    },
  };

  return style;
};

const link = ({ color, colorMode, theme }: useButtonStyleProps) => {
  const bg =
    colorMode === 'dark' && color === 'gray' ? get(theme.colors, `gray.50`) : get(theme.colors, `${color}.500`);

  const style = {
    backgroundColor: 'transparent',
    color: bg,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  };

  return style;
};

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  textAlign: 'center',
  transition: 'all 250ms ease 0s',
  userSelect: 'none',
};

const sizes = (props: useButtonStyleProps) => {
  switch (props.size) {
    case 'xs':
      return {
        borderRadius: 'sm',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 4,
        height: 24,
      };
    case 'sm':
      return {
        borderRadius: 'sm',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 8,
        height: 32,
      };
    case 'md':
      return {
        borderRadius: 'sm',
        fontSize: 'base',
        fontWeight: 'medium',
        lineHeight: 1.2,
        px: 12,
        height: 40,
      };
    case 'lg':
      return {
        borderRadius: 'sm',
        fontSize: 'lg',
        fontWeight: 'medium',
        lineHeight: 1.2,
        px: 16,
        height: 48,
      };
    default:
      return {};
  }
};

const focus = (props: useButtonStyleProps) => ({
  ':focus': {
    boxShadow: props.theme.shadows.focus(props.colorMode === 'dark'),
    zIndex: 1,
  },
});

const disabled = {
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
};

const variants = (props: useButtonStyleProps) => {
  switch (props.variant) {
    case 'filled':
      return filled(props);
    case 'outlined':
      return outlined(props);
    case 'ghost':
      return ghost(props);
    case 'link':
      return link(props);
    default:
      return {};
  }
};

interface useButtonStyleProps extends ButtonProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

export const useButtonStyle = (props: Omit<useButtonStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const _props = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles,
      width: _props.fullWidth ? '100%' : undefined,
      ...sizes(_props),
      ...width(_props),
      ...space(_props),
      ...focus(_props),
      ...disabled,
      ...variants(_props),
    })(props),
  );
};
