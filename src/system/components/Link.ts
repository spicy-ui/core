import { get } from 'styled-system';
import { ComponentTheme } from '../types';

export const Link: ComponentTheme = {
  baseStyle: (props: any) => ({
    color: 'inherit',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    transitionProperty: get(props.theme, 'transitions.property.common'),
    transitionDuration: get(props.theme, 'transitions.duration.150'),
    transitionTimingFunction: get(props.theme, 'transitions.timing.out'),
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus': {
      boxShadow: 'outline',
    },
    '&[aria-disabled="true"], &[aria-disabled="true"]:focus, &[aria-disabled="true"]:hover': {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  }),
};
