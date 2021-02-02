import { LinkProps } from '../../components';
import { ComponentThemeConfig } from '../types';

const getUnderline = (state: 'normal' | 'hover', behaviour: 'default' | 'hover' | 'none') => {
  const blocklist = state === 'hover' ? ['none'] : ['none', 'hover'];
  return blocklist.includes(behaviour) ? 'none' : 'underline';
};

export const Link: ComponentThemeConfig<LinkProps> = {
  baseStyle: ({ color, hoverColor, underlineBehaviour }) => ({
    color: color ?? 'inherit',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: getUnderline('normal', underlineBehaviour),
    transitionProperty: 'common',
    transitionDuration: '150',
    transitionTimingFunction: 'out',
    _hover: {
      color: hoverColor ?? 'inherit',
      textDecoration: getUnderline('hover', underlineBehaviour),
      _disabled: { textDecoration: 'none' },
    },
    _focus: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.5,
      boxShadow: 'none',
      cursor: 'not-allowed',
      textDecoration: 'none',
    },
  }),
};
