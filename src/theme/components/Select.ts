import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const SelectLoading: ComponentTheme = {
  baseStyle: () => ({
    color: 'gray.600',
  }),
};

const SelectClear: ComponentTheme = {
  baseStyle: ({ theme }) => ({
    color: 'gray.500',
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    ':not(:disabled):hover': {
      color: 'gray.600',
    },
  }),
};

const SelectArrow: ComponentTheme = {
  baseStyle: ({ theme }) => ({
    color: 'gray.500',
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    ':not(:disabled):hover': {
      color: 'gray.600',
    },
  }),
};

export const SelectComponents = {
  SelectLoading,
  SelectClear,
  SelectArrow,
};
