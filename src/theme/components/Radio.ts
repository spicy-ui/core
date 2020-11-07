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
      position: 'relative',
      verticalAlign: 'top',
      m: 0,
      width: '4',
      height: '4',
      display: 'inline-block',
      appearance: 'none',
      bg: 'white',
      borderRadius: 'full',
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
        top: '3px',
        left: '3px',
        width: '8px',
        height: '8px',
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
};

const RadioLabel: ComponentTheme = {
  ...CheckboxComponents.CheckboxLabel,
};

export const RadioComponents = {
  RadioOuter,
  RadioInput,
  RadioLabel,
};
