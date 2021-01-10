import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const SelectLoading: ComponentTheme = {
  baseStyle: () => ({
    pr: 2,
    color: 'gray.600',
  }),
};

const SelectClearButton: ComponentTheme = {
  baseStyle: ({ theme }) => ({
    pr: 2,
    color: 'gray.500',
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.300'),
    transitionTimingFunction: get(theme, 'transitions.timing.inOut'),
    ':not(:disabled):hover': {
      color: 'gray.600',
    },
  }),
};

const SelectArrowDown: ComponentTheme = {
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
  SelectClearButton,
  SelectArrowDown,
};
