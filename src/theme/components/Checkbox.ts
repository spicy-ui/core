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
    xs: () => ({
      fontSize: 'xs',
      height: 6,
    }),
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
      position: 'relative',
      verticalAlign: 'top',
      m: 0,
      width: '4',
      height: '4',
      display: 'inline-block',
      appearance: 'none',
      bg: 'white',
      borderRadius: 'xs',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxShadow: isInvalid ? 'error' : 'none',
      cursor: 'pointer',
      outline: 'none',
      transitionDuration: get(theme, 'transitions.duration.300'),
      transitionProperty: get(theme, 'transitions.property.common'),
      transitionTimingFunction: get(theme, 'transitions.timing.inOut'),

      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '1px',
        left: '4px',
        width: '6px',
        height: '10px',
        borderWidth: '2px',
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
