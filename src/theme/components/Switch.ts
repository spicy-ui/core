import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const SwitchOuter: ComponentTheme = {
  baseStyle: ({ isDisabled }) => ({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: isDisabled ? 0.7 : 1,
    cursor: 'pointer',
    userSelect: 'none',
  }),
};

const SwitchInput: ComponentTheme = {
  baseStyle: ({ color, theme }) => ({
    m: '-1px',
    p: '0px',
    height: '1px',
    width: '1px',
    position: 'absolute',
    border: 'none',
    clip: 'rect(0px, 0px, 0px, 0px)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),

    '&:checked + *': {
      bg: `${color}.500`,
    },

    '&:not(:checked):not(:disabled):hover + *': {
      bg: 'gray.200',
    },

    '&:not(:disabled):focus + *': {
      borderColor: `${color}.400`,
      boxShadow: 'outline',
      zIndex: 1,
    },
  }),
  sizes: {
    sm: ({ theme }) => ({
      '&:checked + *::after': {
        transform: `translateX(${get(theme, 'space.4')})`,
      },
    }),
    md: ({ theme }) => ({
      '&:checked + *::after': {
        transform: `translateX(${get(theme, 'space.6')})`,
      },
    }),
    lg: ({ theme }) => ({
      '&:checked + *::after': {
        transform: `translateX(${get(theme, 'space.8')})`,
      },
    }),
  },
};

const SwitchToggle: ComponentTheme = {
  baseStyle: ({ isInvalid, theme }) => ({
    position: 'relative',
    bg: 'gray.100',
    borderRadius: 'full',
    boxShadow: isInvalid ? 'error' : 'none',
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bg: 'white',
      borderRadius: 'full',
      transitionDuration: get(theme, 'transitions.duration.300'),
      transitionProperty: get(theme, 'transitions.property.common'),
      transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    },
  }),
  sizes: {
    sm: () => ({
      width: 8,
      height: 4,

      '&::after': {
        top: 0.5,
        left: 0.5,
        width: 3,
        height: 3,
      },
    }),
    md: () => ({
      width: 12,
      height: 6,

      '&::after': {
        top: 1,
        left: 1,
        width: 4,
        height: 4,
      },
    }),
    lg: () => ({
      width: 16,
      height: 8,

      '&::after': {
        top: 1,
        left: 1,
        width: 6,
        height: 6,
      },
    }),
  },
};

export const SwitchComponents = {
  SwitchOuter,
  SwitchInput,
  SwitchToggle,
};
