import { RadioProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const RadioOuter: ComponentThemeConfig<RadioProps> = {
  propToScaleMap: [['size', 'sizes']],
  baseStyle: ({ disabled }: any) => ({
    width: 'full',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: disabled ? 0.7 : 1,
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

export const RadioInput: ComponentThemeConfig<RadioProps> = {
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
      borderRadius: 'full',
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
        bg: `${color}.500`,
        borderRadius: 'full',
        opacity: 'var(--o, 0)',
        transitionProperty: 'common',
        transitionTimingFunction: 'inOut',
        transitionDuration: '300',
      },
      _checked: {
        '--o': 1,
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
            top: '2px',
            left: '2px',
            width: '6px',
            height: '6px',
          },
        },
      }),
      sm: () => ({
        [supportedQuery]: {
          height: 3,
          width: 3,
          _after: {
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
          _after: {
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
          _after: {
            top: '4px',
            left: '4px',
            width: '14px',
            height: '14px',
          },
        },
      }),
    },
  },
};

export const RadioLabel: ComponentThemeConfig<RadioProps> = {
  baseStyle: () => ({
    ml: 1.5,
  }),
};
