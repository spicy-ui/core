import { get } from 'styled-system';
import { ComponentTheme } from '../types';

const getUnderline = (state: 'normal' | 'hover', behaviour: 'default' | 'hover' | 'none') => {
  const blocklist = state === 'hover' ? ['none'] : ['none', 'hover'];
  return blocklist.includes(behaviour) ? 'none' : 'underline';
};

export const Link: ComponentTheme = {
  baseStyle: ({ color, hoverColor, underlineBehaviour, theme }) => ({
    color: color ?? 'inherit',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: getUnderline('normal', underlineBehaviour),
    transitionProperty: get(theme, 'transitions.property.common'),
    transitionDuration: get(theme, 'transitions.duration.150'),
    transitionTimingFunction: get(theme, 'transitions.timing.out'),
    ':hover': {
      color: hoverColor ?? 'inherit',
      textDecoration: getUnderline('hover', underlineBehaviour),
    },
    ':focus': {
      boxShadow: 'outline',
    },
    '&[aria-disabled="true"], &[aria-disabled="true"]:focus, &[aria-disabled="true"]:hover': {
      opacity: 0.5,
      boxShadow: 'none',
      cursor: 'not-allowed',
      textDecoration: 'none',
    },
  }),
};
