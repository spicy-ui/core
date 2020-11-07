import { transparentize } from 'polished';
import { get } from 'styled-system';
import { ComponentStyle, ComponentTheme } from '../types';

const ghost: ComponentStyle = ({ color, theme }) => {
  switch (color) {
    case 'gray':
      return {
        color: 'gray.800',
        ':not(:disabled):hover': {
          backgroundColor: transparentize(0.5, get(theme.colors, `gray.200`)),
        },
        ':not(:disabled):active': {
          backgroundColor: transparentize(0.5, get(theme.colors, `gray.300`)),
        },
      };
    default:
      return {
        color: `${color}.500`,
        ':not(:disabled):hover': {
          backgroundColor: transparentize(0.2, get(theme.colors, `${color}.50`)),
        },
        ':not(:disabled):active': {
          backgroundColor: transparentize(0.4, get(theme.colors, `${color}.100`)),
        },
      };
  }
};

const outlined: ComponentStyle = (props) => {
  return {
    border: '2px',
    borderColor: props.color === 'gray' ? 'gray.200' : 'currentcolor',
    ...ghost(props),
  };
};

const filled: ComponentStyle = ({ color }) => {
  switch (color) {
    case 'gray':
      return {
        backgroundColor: 'gray.100',
        color: 'gray.800',
        ':not(:disabled):hover': {
          backgroundColor: 'gray.200',
        },
        ':not(:disabled):active': {
          backgroundColor: 'gray.300',
        },
      };
    default:
      return {
        backgroundColor: `${color}.500`,
        color: `white`,
        ':not(:disabled):hover': {
          backgroundColor: `${color}.600`,
        },
        ':not(:disabled):active': {
          backgroundColor: `${color}.700`,
        },
      };
  }
};

const link: ComponentStyle = ({ color }) => ({
  color: `${color}.500`,
  ':not(:disabled):hover': {
    textDecoration: 'underline',
  },
  ':not(:disabled):active': {
    color: `${color}.700`,
  },
});

const unstyled: ComponentStyle = () => ({});

export const Button: ComponentTheme = {
  baseStyle: (props) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    appearance: 'none',
    background: 'none',
    border: 'none',
    borderRadius: 'sm',
    color: 'inherit',
    cursor: 'pointer',
    fontWeight: 'semibold',
    lineHeight: 1,
    outline: 'none',
    textAlign: 'center',
    transitionDuration: get(props.theme, 'transitions.duration.300'),
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionTimingFunction: get(props.theme, 'transitions.timing.inOut'),
    userSelect: 'none',
    ':focus': {
      boxShadow: 'outline',
      zIndex: 1,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  }),
  sizes: {
    xs: () => ({
      px: 2,
      height: 6,
      fontSize: 'xs',
    }),
    sm: () => ({
      px: 3,
      height: 8,
      fontSize: 'sm',
    }),
    md: () => ({
      px: 4,
      height: 10,
      fontSize: 'md',
    }),
    lg: () => ({
      px: 6,
      height: 12,
      fontSize: 'lg',
    }),
  },
  variants: {
    filled,
    outlined,
    ghost,
    link,
    unstyled,
  },
};
