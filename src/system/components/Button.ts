import { transparentize } from 'polished';
import { get } from 'styled-system';
import { colorMode } from '../../util';
import { ComponentStyle, ComponentTheme } from '../types';

const ghost = (props: any): ComponentStyle => {
  if (props.color === 'gray') {
    return {
      color: colorMode('inherit', 'whiteAlpha.900')(props),
      ':not(:disabled):hover': {
        backgroundColor: colorMode('gray.100', 'whiteAlpha.200')(props),
      },
      ':active': {
        backgroundColor: colorMode('gray.200', 'whiteAlpha.300')(props),
      },
    };
  }

  if (props.color === 'white' || props.color === 'black') {
    return {
      color: `${props.color}Alpha.900`,
      backgroundColor: 'transparent',
      ':not(:disabled):hover': {
        backgroundColor: `${props.color}Alpha.200`,
      },
      ':active': {
        backgroundColor: `${props.color}Alpha.300`,
      },
    };
  }

  return {
    color: `${props.color}.500`,
    backgroundColor: 'transparent',
    ':not(:disabled):hover': {
      backgroundColor: transparentize(0.9, get(props.theme.colors, `${props.color}.500`)),
    },
    ':active': {
      backgroundColor: transparentize(0.8, get(props.theme.colors, `${props.color}.500`)),
    },
  };
};

const outlined = (props: any): ComponentStyle => {
  return {
    border: '2px',
    borderColor: props.color === 'gray' ? colorMode('gray.200', 'whiteAlpha.300')(props) : 'currentColor',
    ...ghost(props),
  };
};

const filled = (props: any): ComponentStyle => {
  if (props.color === 'gray') {
    return {
      backgroundColor: colorMode('gray.100', 'whiteAlpha.200')(props),
      ':not(:disabled):hover': {
        backgroundColor: colorMode('gray.200', 'whiteAlpha.300')(props),
      },
      ':active': {
        backgroundColor: colorMode('gray.300', 'whiteAlpha.400')(props),
      },
    };
  }

  if (props.color === 'white' || props.color === 'black') {
    return {
      color: `${props.color === 'white' ? 'black' : 'white'}Alpha.900`,
      backgroundColor: `${props.color}Alpha.800`,
      ':not(:disabled):hover': {
        backgroundColor: `${props.color}Alpha.900`,
      },
      ':active': {
        backgroundColor: props.color,
      },
    };
  }

  return {
    backgroundColor: `${props.color}.500`,
    color: 'white',
    ':not(:disabled):hover': {
      backgroundColor: `${props.color}.600`,
    },
    ':active': {
      backgroundColor: `${props.color}.700`,
    },
  };
};

const link = (props: any): ComponentStyle => {
  if (props.color === 'white' || props.color === 'black') {
    return {
      color: `${props.color}Alpha.900`,
      ':not(:disabled):hover': {
        color: props.color,
        textDecoration: 'underline',
      },
      ':active': {
        color: props.color,
      },
    };
  }

  return {
    color: `${props.color}.500`,
    ':not(:disabled):hover': {
      color: `${props.color}.600`,
      textDecoration: 'underline',
    },
    ':active': {
      color: `${props.color}.700`,
    },
  };
};

export const Button: ComponentTheme = {
  baseStyle: (props: any) => ({
    m: 0,
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
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionDuration: get(props.theme, 'transitions.duration.300'),
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
  variants: {
    filled,
    outlined,
    ghost,
    link,
  },
  sizes: {
    xs: () => ({
      fontSize: 'xs',
      px: 2,
      height: 6,
    }),
    sm: () => ({
      fontSize: 'sm',
      px: 3,
      height: 8,
    }),
    md: () => ({
      fontSize: 'md',
      px: 4,
      height: 10,
    }),
    lg: () => ({
      fontSize: 'lg',
      px: 6,
      height: 12,
    }),
  },
};
