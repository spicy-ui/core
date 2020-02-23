import { css as withSystem } from '@styled-system/css';
import { darken, lighten } from 'polished';
import { css, DefaultTheme } from 'styled-components';
import { get, space, width } from 'styled-system';
import { useColorMode } from '../ColorMode';
import { InputProps } from './Input';

const outlined = ({ colorMode, theme }: useInputStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: get(theme.colors, `gray.800`),
      borderColor: get(theme.colors, `gray.700`),
      color: get(theme.colors, 'text.inverse'),
      ':hover': {
        borderColor: get(theme.colors, `gray.600`),
      },
    };
  }

  return {
    backgroundColor: get(theme.colors, `white`),
    borderColor: get(theme.colors, `gray.100`),
    color: get(theme.colors, 'text.base'),
    ':hover': {
      borderColor: get(theme.colors, `gray.200`),
    },
  };
};

const filled = ({ colorMode, theme }: useInputStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: get(theme.colors, `gray.700`),
      color: get(theme.colors, 'text.inverse'),
      ':hover': {
        backgroundColor: lighten(0.05, get(theme.colors, `gray.700`)),
      },
    };
  }

  return {
    backgroundColor: get(theme.colors, `gray.100`),
    color: get(theme.colors, 'text.base'),
    ':hover': {
      backgroundColor: darken(0.05, get(theme.colors, `gray.100`)),
    },
  };
};

const baseStyles = {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: '1px solid transparent',
  color: 'gray.900',
  outline: 'none',
  transition: 'all 250ms ease 0s',
};

const sizes = (props: useInputStyleProps) => {
  switch (props.space) {
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
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 12,
        height: 40,
      };
    case 'lg':
      return {
        borderRadius: 'sm',
        fontSize: 'lg',
        fontWeight: 'normal',
        lineHeight: 1.2,
        px: 16,
        height: 48,
      };
    default:
      return {};
  }
};

const focus = (props: useInputStyleProps) => ({
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

const variants = (props: useInputStyleProps) => {
  switch (props.variant) {
    case 'outlined':
      return outlined(props);
    case 'filled':
      return filled(props);
    default:
      return {};
  }
};

interface useInputStyleProps extends InputProps {
  theme: DefaultTheme;
  colorMode: 'light' | 'dark';
}

export const useInputStyle = (props: Omit<useInputStyleProps, 'colorMode'>) => {
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
