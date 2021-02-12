import { get } from '@spicy-ui/styled-system';
import { CodeProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Code: ComponentThemeConfig<CodeProps> = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    px: 1,
    display: 'inline-block',
    borderRadius: 'xs',
    fontSize: 'xs',
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
