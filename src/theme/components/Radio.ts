import { get } from 'styled-system';
import { ComponentTheme } from '../types';
import { CheckboxComponents } from './Checkbox';

const RadioOuter: ComponentTheme = {
  ...CheckboxComponents.CheckboxOuter,
};

const supportedQuery = '@supports (-webkit-appearance: none) or (-moz-appearance: none)';

const RadioInput: ComponentTheme = {
  baseStyle: ({ color = 'blue', isInvalid, theme }) => ({
    [supportedQuery]: {
      m: 0,
      width: 4,
      height: 4,
      display: 'inline-block',
      position: 'relative',
      appearance: 'none',
      bg: 'white',
      borderRadius: 'full',
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
        bg: `${color}.500`,
        borderRadius: 'full',
        opacity: 'var(--o, 0)',
        transitionDuration: get(theme, 'transitions.duration.300'),
        transitionProperty: get(theme, 'transitions.property.common'),
        transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
      },

      '&:checked': {
        '--o': 1,
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
          top: '2px',
          left: '2px',
          width: '6px',
          height: '6px',
        },
      },
    }),
    md: () => ({
      [supportedQuery]: {
        height: 4,
        width: 4,
        '&::after': {
          top: '3px',
          left: '3px',
          width: '8px',
          height: '8px',
        },
      },
    }),
    lg: () => ({
      [supportedQuery]: {
        height: 6,
        width: 6,
        '&::after': {
          top: '4px',
          left: '4px',
          width: '14px',
          height: '14px',
        },
      },
    }),
  },
};

const RadioLabel: ComponentTheme = {
  ...CheckboxComponents.CheckboxLabel,
};

export const RadioComponents = {
  RadioOuter,
  RadioInput,
  RadioLabel,
};
