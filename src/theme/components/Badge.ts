import { get } from '@spicy-ui/styled-system';
import { BadgeProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Badge: ComponentThemeConfig<BadgeProps> = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    px: 1,
    display: 'inline-block',
    borderRadius: 'xs',
    fontSize: 'xs',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  }),
  scales: {
    variants: {
      outline: ({ color, theme }) => ({
        color: `${color}.500`,
        boxShadow: `inset 0 0 0 1px ${get(theme.colors, `${color}.500`)}`,
      }),
      solid: ({ color }) => ({
        background: `${color}.500`,
        color: `white`,
      }),
      subtle: ({ color }) => ({
        background: `${color}.100`,
        color: `${color}.800`,
      }),
    },
  },
};
