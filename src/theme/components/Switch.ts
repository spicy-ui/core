import { get } from '@spicy-ui/styled-system';
import { SwitchProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const SwitchOuter: ComponentThemeConfig<SwitchProps> = {
  baseStyle: ({ isDisabled }) => ({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: isDisabled ? 0.7 : 1,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
  }),
};

export const SwitchInput: ComponentThemeConfig<SwitchProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ color }) => ({
    m: '-1px',
    p: '0px',
    height: '1px',
    width: '1px',
    position: 'absolute',
    border: 'none',
    clip: 'rect(0px, 0px, 0px, 0px)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transitionProperty: 'common',
    transitionTimingFunction: 'inOut',
    transitionDuration: '300',
    '&:checked + *': {
      bg: `${color}.500`,
    },
    '&:not(:checked):not(:disabled):hover + *': {
      bg: 'gray.300',
    },
    '&:not(:disabled):focus + *': {
      borderColor: `${color}.400`,
      boxShadow: 'outline',
      zIndex: 1,
    },
  }),
  scales: {
    sizes: {
      sm: ({ theme }) => ({
        '&:checked + *::after': {
          transform: `translateX(${get(theme, 'space.3')})`,
        },
      }),
      md: ({ theme }) => ({
        '&:checked + *::after': {
          transform: `translateX(${get(theme, 'space.4')})`,
        },
      }),
      lg: ({ theme }) => ({
        '&:checked + *::after': {
          transform: `translateX(${get(theme, 'space.6')})`,
        },
      }),
    },
  },
};

export const SwitchToggle: ComponentThemeConfig<SwitchProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ isInvalid }) => ({
    position: 'relative',
    bg: 'gray.300',
    borderRadius: 'full',
    boxShadow: isInvalid ? 'error' : 'none',
    transitionProperty: 'common',
    transitionTimingFunction: 'inOut',
    transitionDuration: '300',
    _after: {
      content: '""',
      display: 'block',
      position: 'absolute',
      bg: 'white',
      borderRadius: 'full',
      transitionProperty: 'common',
      transitionTimingFunction: 'inOut',
      transitionDuration: '300',
    },
  }),
  scales: {
    sizes: {
      sm: () => ({
        height: 4,
        width: 7,
        _after: {
          top: 0.5,
          left: 0.5,
          width: 3,
          height: 3,
        },
      }),
      md: () => ({
        height: 6,
        width: 10,
        _after: {
          top: 1,
          left: 1,
          width: 4,
          height: 4,
        },
      }),
      lg: () => ({
        height: 8,
        width: 14,
        _after: {
          top: 1,
          left: 1,
          width: 6,
          height: 6,
        },
      }),
    },
  },
};
