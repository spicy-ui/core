import { TabProps, TabsProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Tabs: ComponentThemeConfig<TabsProps> = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }),
  scales: {
    variants: {
      line: ({ color }) => ({
        borderBottom: '2px',
        borderColor: 'inherit',
        '& > [role="tab"]': {
          marginBottom: '-2px',
          borderBottom: '2px',
          borderColor: 'transparent',
          color: 'gray.500',
          _selected: {
            borderBottom: '2px',
            color: `${color}.500`,
          },
        },
      }),
      enclosed: ({ color }) => ({
        borderBottom: '1px',
        borderColor: 'inherit',
        '& > [role="tab"]': {
          marginBottom: '-1px',
          color: 'gray.500',
          border: '1px',
          borderColor: 'transparent',
          _selected: {
            borderColor: 'inherit',
            borderBottomColor: 'white',
            borderTopLeftRadius: 'md',
            borderTopRightRadius: 'md',
            color: `${color}.500`,
          },
        },
      }),
      pill: ({ color }) => ({
        '& > [role="tab"]': {
          color: 'gray.500',
          borderRadius: 'full',
          _selected: {
            bgColor: `${color}.100`,
            color: `${color}.800`,
          },
        },
      }),
    },
  },
};

export const Tab: ComponentThemeConfig<TabProps> = {
  baseStyle: () => ({
    py: 2,
    px: 4,
    outline: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    appearance: 'none',
    background: 'none',
    border: 'none',
    fontWeight: 'medium',
    transitionDuration: '300',
    transitionProperty: 'common',
    transitionTimingFunction: 'inOut',
    _focus: {
      boxShadow: 'outline',
      zIndex: 1,
    },
    _disabled: {
      boxShadow: 'none',
      cursor: 'not-allowed',
      opacity: 0.4,
    },
  }),
};
