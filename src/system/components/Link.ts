import { get } from 'styled-system';
import { ComponentTheme } from '../types';

export const Link: ComponentTheme = {
  baseStyle: (props: any) => ({
    color: 'blue.500',
    cursor: 'pointer',
    fontWeight: 'medium',
    outline: 'none',
    textDecoration: 'none',
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionDuration: get(props.theme, 'transitions.duration.150'),
    transitionTimingFunction: get(props.theme, 'transitions.timing.out'),
    ':hover': {
      color: 'blue.600',
      textDecoration: 'underline',
    },
    ':active': {
      color: 'blue.700',
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
