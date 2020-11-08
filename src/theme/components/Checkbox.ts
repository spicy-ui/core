import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const CheckboxOuter: ComponentTheme = {
  baseStyle: ({ isDisabled }) => ({
    width: 'full',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: isDisabled ? 0.7 : 1,
    cursor: 'pointer',
    userSelect: 'none',
  }),
  sizes: {
    sm: () => ({
      fontSize: 'sm',
      height: 8,
    }),
    md: () => ({
      fontSize: 'md',
      height: 10,
    }),
    lg: () => ({
      fontSize: 'lg',
      height: 12,
    }),
  },
};

const supportedQuery = '@supports (-webkit-appearance: none) or (-moz-appearance: none)';

const CheckboxInput: ComponentTheme = {
  baseStyle: ({ color = 'blue', isInvalid, theme }) => ({
    [supportedQuery]: {
      m: 0,
      width: 4,
      height: 4,
      display: 'inline-block',
      position: 'relative',
      appearance: 'none',
      bg: 'white',
      borderRadius: 'xs',
      borderWidth: '1px',
      borderStyle: 'solid',
      boxShadow: isInvalid ? 'error' : 'none',
      cursor: 'pointer',
      outline: 'none',
      verticalAlign: 'top',
      transitionDuration: get(theme, 'transitions.duration.300'),
      transitionProperty: get(theme, 'transitions.property.common'),
      transitionTimingFunction: get(theme, 'transitions.timing.inOut'),

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: 'white',
        borderLeft: 0,
        borderTop: 0,
        opacity: 'var(--o, 0)',
        transform: 'rotate(43deg)',
        transitionDuration: get(theme, 'transitions.duration.300'),
        transitionProperty: get(theme, 'transitions.property.common'),
        transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
      },

      '&:checked': {
        '--o': 1,
        bg: `${color}.500`,
        borderColor: `${color}.400`,
      },

      '&:not(:checked):not(:disabled):hover': {
        borderColor: 'gray.400',
      },

      '&:not(:disabled):focus': {
        borderColor: `${color}.400`,
        boxShadow: 'outline',
        zIndex: 1,
      },
    },
  }),
  sizes: {
    sm: () => ({
      [supportedQuery]: {
        height: 3,
        width: 3,
        '&::after': {
          top: 0,
          left: '3px',
          width: '4px',
          height: '8px',
          borderWidth: '2px',
        },
      },
    }),
    md: () => ({
      [supportedQuery]: {
        height: 4,
        width: 4,
        '&::after': {
          top: '1px',
          left: '4px',
          width: '6px',
          height: '10px',
          borderWidth: '2px',
        },
      },
    }),
    lg: () => ({
      [supportedQuery]: {
        height: 6,
        width: 6,
        '&::after': {
          top: '1px',
          left: '7px',
          width: '8px',
          height: '16px',
          borderWidth: '3px',
        },
      },
    }),
  },
};

const CheckboxLabel: ComponentTheme = {
  baseStyle: () => ({
    ml: 2,
  }),
};

export const CheckboxComponents = {
  CheckboxOuter,
  CheckboxInput,
  CheckboxLabel,
};
