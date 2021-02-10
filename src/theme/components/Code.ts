import { get } from '@spicy-ui/styled-system';
import { CodeProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Code: ComponentThemeConfig<CodeProps> = {
  propToScaleMap: [['variant', 'variants']],
  baseStyle: () => ({
    paddingLeft: '0.2em',
    paddingRight: '0.2em',
    display: 'inline-block',
    fontSize: 'xs',
    borderRadius: 'xs',
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
