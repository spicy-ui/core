import { CheckboxProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const CheckboxOuter: ComponentThemeConfig<CheckboxProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ isDisabled }) => ({
    width: 'full',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: isDisabled ? 0.7 : 1,
    cursor: 'pointer',
    userSelect: 'none',
  }),
  scales: {
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
  },
};

const supportedQuery = '@supports (-webkit-appearance: none) or (-moz-appearance: none)';

export const CheckboxInput: ComponentThemeConfig<CheckboxProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ color, isInvalid }) => ({
    [supportedQuery]: {
      m: 0,
      width: 4,
      height: 4,
      display: 'inline-block',
      position: 'relative',
      appearance: 'none',
      bgColor: 'white',
      borderRadius: 'xs',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.300',
      boxShadow: isInvalid ? 'error' : 'none',
      cursor: 'pointer',
      outline: 'none',
      verticalAlign: 'top',
      transitionProperty: 'common',
      transitionTimingFunction: 'inOut',
      transitionDuration: '300',
      _after: {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderStyle: 'solid',
        borderColor: color === 'whiteAlpha' ? 'black' : 'white',
        borderLeft: 0,
        borderTop: 0,
        opacity: 'var(--o, 0)',
        transform: 'rotate(43deg)',
        transitionProperty: 'common',
        transitionTimingFunction: 'inOut',
        transitionDuration: '300',
      },
      _checked: {
        '--o': 1,
        bgColor: `${color}.500`,
        borderColor: `${color}.400`,
      },
      _hover: {
        borderColor: `${color}.400`,
        _disabled: { borderColor: `${color}.300` },
      },
      _focus: {
        borderColor: `${color}.400`,
        boxShadow: 'outline',
        zIndex: 1,
      },
    },
  }),
  scales: {
    sizes: {
      xs: () => ({
        [supportedQuery]: {
          height: 3,
          width: 3,
          _after: {
            top: 0,
            left: '3px',
            width: '4px',
            height: '8px',
            borderWidth: '2px',
          },
        },
      }),
      sm: () => ({
        [supportedQuery]: {
          height: 3,
          width: 3,
          _after: {
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
          _after: {
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
          _after: {
            top: '1px',
            left: '7px',
            width: '8px',
            height: '16px',
            borderWidth: '3px',
          },
        },
      }),
    },
  },
};

export const CheckboxLabel: ComponentThemeConfig<CheckboxProps> = {
  baseStyle: () => ({
    ml: 1.5,
  }),
};
