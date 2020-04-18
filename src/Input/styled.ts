import { css as withSystem } from '@styled-system/css';
import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { get, space, width } from 'styled-system';
import { useColorMode } from '../ColorMode';
import { InputProps } from './Input';

const outlined = ({ colorMode }: useInputStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: `gray.800`,
      borderColor: `gray.700`,
      color: 'text.inverse',
      ':hover': {
        borderColor: `gray.600`,
      },
    };
  }

  return {
    backgroundColor: `white`,
    borderColor: `gray.100`,
    color: 'text.base',
    ':hover': {
      borderColor: `gray.200`,
    },
  };
};

const filled = ({ colorMode, theme }: useInputStyleProps) => {
  if (colorMode === 'dark') {
    return {
      backgroundColor: `gray.700`,
      color: 'text.inverse',
      ':hover': {
        backgroundColor: lighten(0.05, get(theme.colors, `gray.700`)),
      },
    };
  }

  return {
    backgroundColor: `gray.100`,
    color: 'text.base',
    ':hover': {
      backgroundColor: darken(0.05, get(theme.colors, `gray.100`)),
    },
  };
};

const baseStyles = (props: useInputStyleProps) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: '1px solid transparent',
  color: props.colorMode === 'dark' ? 'text.inverse' : 'text.base',
  outline: 'none',
  transition: 'all 250ms ease 0s',
});

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

const focus = (props: useInputStyleProps) => {
  if (props.isInvalid) {
    return {
      boxShadow: props.theme.shadows.error(props.colorMode === 'dark'),
      zIndex: 1,
    };
  }

  return {
    ':focus': {
      boxShadow: props.theme.shadows.focus(props.colorMode === 'dark'),
      zIndex: 1,
    },
  };
};

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

const useInputStyle = (props: Omit<useInputStyleProps, 'colorMode'>) => {
  const { mode: colorMode } = useColorMode();
  const _props = { ...props, colorMode };

  return css(
    withSystem({
      ...baseStyles(_props),
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

export const StyledInput = styled('input')<InputProps>(useInputStyle);
