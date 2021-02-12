import { get } from '@spicy-ui/styled-system';
import { TagActionProps, TagLabelProps, TagProps } from '../../components';
import { ComponentThemeConfig } from '../types';

export const Tag: ComponentThemeConfig<TagProps> = {
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  baseStyle: ({ isRound }) => ({
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'medium',
    borderRadius: isRound ? 'full' : 'md',
    lineHeight: '1',
    outline: '0px',
  }),
  scales: {
    sizes: {
      sm: () => ({
        px: 1.5,
        minHeight: 5,
        minWidth: 5,
        fontSize: 'xs',
      }),
      md: () => ({
        px: 2,
        minHeight: 6,
        minWidth: 6,
        fontSize: 'sm',
      }),
      lg: () => ({
        px: 3,
        minHeight: 8,
        minWidth: 8,
        fontSize: 'md',
      }),
    },
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

export const TagAction: ComponentThemeConfig<TagActionProps> = {
  baseStyle: () => ({
    ml: 1.5,
    fontSize: 'inherit',
  }),
};

export const TagIconBefore: ComponentThemeConfig<TagLabelProps> = {
  baseStyle: () => ({
    mr: 1.5,
  }),
};

export const TagIconAfter: ComponentThemeConfig<TagLabelProps> = {
  baseStyle: () => ({
    ml: 1.5,
  }),
};

export const TagLabel: ComponentThemeConfig<TagLabelProps> = {
  baseStyle: () => ({
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
};
